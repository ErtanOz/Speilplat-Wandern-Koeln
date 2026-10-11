import fs from 'node:fs';

const sourceUrl = 'https://geoportal.stadt-koeln.de/arcgis/rest/services/freizeit_natur_sport/spielangebote/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson';
const raw = JSON.parse(fs.readFileSync('data/koeln-playgrounds.geojson', 'utf8').replace(/^\uFEFF/, ''));
const selections = [
  {id:'ehrenfeld',title:'Kleine Entdeckerrunde',area:'Ehrenfeld', names:['Helmholtzplatz','Alpenerplatz/Alpenerstraße','Leo-Amann-Park/Venloer Straße'],description:'Drei Spielplatzstopps mitten in Ehrenfeld. Zwischen Helmholtzplatz und Leo-Amann-Park bleibt Zeit für kleine Entdeckungen.', theme:'sun'},
  {id:'lindenthal',title:'Spielpause in Lindenthal',area:'Lindenthal',names:['Lortzingplatz','Immermannstraße','Dürener Straße/Stadtwaldgürtel'],description:'Vom Lortzingplatz in Richtung Stadtwald: ein Spaziergang mit drei Spielpausen und einem grünen Ziel.',theme:'leaf'},
  {id:'nippes',title:'Durchs Veedel spazieren',area:'Nippes',names:['Wartburgplatz','Leipziger Platz','Merheimer Straße/Innerer Grünzug (Alhambra)'],description:'Plätze, Spiel und ein Stück Grün: entdecke drei Spielplätze in Nippes in einer festen Reihenfolge.',theme:'kite'},
];
function decode(encoded) {
  let index=0,lat=0,lon=0; const coordinates=[];
  while(index<encoded.length){
    const values=[];
    for(let k=0;k<2;k++){let result=0,shift=0,byte;do{byte=encoded.charCodeAt(index++)-63;result|=(byte&31)<<shift;shift+=5;}while(byte>=32);values.push(result&1?~(result>>1):result>>1);}
    lat+=values[0];lon+=values[1];coordinates.push([lat/1e6,lon/1e6]);
  }return coordinates;
}
const tours=[];
for(const selection of selections){
  const stops=selection.names.map(name=>{
    const clean=value=>String(value??'').replace(/\s+/g,' ').trim();
    const f=raw.features.find(f=>clean(f.properties.spielplatzname)===clean(name) && clean(f.properties.stadtteil)===selection.area);
    if(!f)throw new Error(`Spielplatz fehlt: ${name}`);
    const p=f.properties;
    const equipment=[];
    for(const [key,label] of [['fussballtore','Fußballtore'],['basketballkoerbe','Basketballkörbe'],['tischtennisplatten','Tischtennisplatten']])if(p[key] && p[key]!=='0')equipment.push(`${label}: ${p[key]}`);
    return {id:String(p.objectid),name,location:`${name}, Köln-${p.stadtteil}`,lat:f.geometry.coordinates[1],lon:f.geometry.coordinates[0],equipment};
  });
  const query={locations:stops.map(s=>({lat:s.lat,lon:s.lon,type:'break'})),costing:'pedestrian',units:'kilometers',language:'de-DE'};
  const response=await fetch('https://valhalla1.openstreetmap.de/route?json='+encodeURIComponent(JSON.stringify(query)));
  if(!response.ok)throw new Error(`Routing: ${response.status}`);
  const result=await response.json();
  fs.writeFileSync(`data/route-${selection.id}.json`,JSON.stringify(result,null,2));
  const trip=result.trip;
  if(!trip?.legs?.length)throw new Error('Keine Fußroute erhalten');
  const path=trip.legs.flatMap(leg=>decode(leg.shape));
  const length=trip.summary?.length ?? trip.legs.reduce((n,l)=>n+l.summary.length,0);
  tours.push({...selection,stops,start:stops[0].name,destination:stops.at(-1).name,distanceKm:Math.round(length*10)/10,walkingMinutes:Math.max(1,Math.round(length/4*60)),path,isDemo:false,source:'Stadt Köln · Spiel- und Sportplätze',sourceUrl,dataDate:'2026-10-11',routeSource:'Valhalla / OpenStreetMap',routeStatus:'Berechneter Fußweg, nicht vor Ort geprüft'});
  console.log(`${selection.area}: ${length.toFixed(2)} km, ${path.length} Wegpunkte`);
}
fs.writeFileSync('src/tours.js','// Spielplätze: Stadt Köln. Fußwege: Valhalla / OpenStreetMap. Import siehe scripts/import-tours.mjs.\nconst tours = '+JSON.stringify(tours,null,2)+';\n');
