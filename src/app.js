'use strict';
const overview=document.querySelector('#tour-overview'), details=document.querySelector('#tour-details'), list=document.querySelector('#tour-list'), content=document.querySelector('#tour-detail-content');
const search=document.querySelector('#search'), area=document.querySelector('#area'), results=document.querySelector('#results');
let map=null, markers=[], previousTour=null;
const validTours=tours.filter(t=>t.id&&t.stops?.length>=2&&t.path?.length>=2&&t.stops.every(s=>Number.isFinite(s.lat)&&Number.isFinite(s.lon)));
function element(tag,text,className){const node=document.createElement(tag);if(text!==undefined)node.textContent=text;if(className)node.className=className;return node;}
function km(t){return t.distanceKm.toLocaleString('de-DE',{maximumFractionDigits:1})+' km';}
function normalize(value){return value.toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
function renderOverview(){
  list.replaceChildren();const query=normalize(search.value.trim());
  const filtered=validTours.filter(t=>(!area.value||t.area===area.value)&&normalize([t.title,t.area,...t.stops.map(s=>s.name)].join(' ')).includes(query));
  results.textContent=`${filtered.length} ${filtered.length===1?'Spaziergang':'Spaziergänge'} gefunden`;
  for(const tour of filtered){
    const card=element('article',undefined,'tour-card'),art=element('div',undefined,`card-art theme-${tour.theme}`);
    art.append(element('span',tour.area,'area-badge'));const symbol=element('span',{sun:'☀',leaf:'❧',kite:'♧'}[tour.theme]||'❧','card-symbol');symbol.setAttribute('aria-hidden','true');art.append(symbol);
    const body=element('div',undefined,'card-body');body.append(element('h3',tour.title),element('p',tour.description,'card-description'));
    const metrics=element('div',undefined,'metrics');metrics.append(element('span',km(tour)),element('span',`≈ ${tour.walkingMinutes} Min.`),element('span',`${tour.stops.length} Spielplätze`));
    body.append(metrics,element('p','Geschätzte Gehzeit · ohne Spielpausen','metric-note'));if(tour.isDemo)body.append(element('p','Demo · erfundenes Lernbeispiel'));
    const button=element('button','Spaziergang ansehen ↗','button');button.type='button';button.dataset.tourId=tour.id;button.setAttribute('aria-label',`${tour.title}: Spaziergang ansehen`);
    button.addEventListener('click',()=>{previousTour=tour.id;location.hash=`tour/${tour.id}`;});body.append(button);card.append(art,body);list.append(card);
  }
  if(!filtered.length)list.append(element('p',validTours.length?'Keine passende Tour. Ändere die Suche oder setze die Filter zurück.':'Zurzeit sind keine vollständigen Touren verfügbar.','empty'));
}
for(const district of [...new Set(validTours.map(t=>t.area))].sort()){const option=element('option',district);option.value=district;area.append(option);}
search.addEventListener('input',renderOverview);area.addEventListener('change',renderOverview);
document.querySelector('#reset').addEventListener('click',()=>{search.value='';area.value='';renderOverview();search.focus();});
document.querySelector('#back').addEventListener('click',()=>{location.hash='';});
function selectStop(tour,index){
  const stop=tour.stops[index];document.querySelectorAll('.stop-button').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));
  const info=document.querySelector('#stop-info');info.replaceChildren(element('h3',stop.name),element('p',stop.location),element('p',`Ausstattung: ${stop.equipment?.length?stop.equipment.join(' · '):'Keine Angabe'}`));
  if(map&&markers[index]){map.panTo([stop.lat,stop.lon]);markers[index].openPopup();}
}
function createMap(tour){
  const failure=document.querySelector('#map-error');
  try{
    if(!window.L)throw new Error('Kartenbibliothek fehlt');
    map=L.map('map',{scrollWheelZoom:false}).fitBounds(tour.path,{padding:[30,30]});
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'}).on('tileerror',()=>{failure.hidden=false;failure.textContent='Kartenhintergrund nicht verfügbar. Tourverlauf, Stopps und die Liste bleiben nutzbar.';}).addTo(map);
    L.polyline(tour.path,{color:'#214c3b',weight:5,opacity:.85}).addTo(map);
    markers=tour.stops.map((stop,index)=>{
      const marker=L.marker([stop.lat,stop.lon],{icon:L.divIcon({className:'',html:`<span class="map-number ${index===tour.stops.length-1?'last':''}">${index+1}</span>`,iconSize:[34,34],iconAnchor:[17,17]}),title:`${index+1}. ${stop.name}`,keyboard:true}).addTo(map);
      marker.bindPopup(element('span',`${index+1}. ${stop.name}`));marker.on('click',()=>selectStop(tour,index));return marker;
    });requestAnimationFrame(()=>map?.invalidateSize());
  }catch(error){failure.hidden=false;failure.textContent='Karte nicht verfügbar. Nutze die Spielplatzliste und die Tourbeschreibung.';}
}
function openTour(tour){
  overview.hidden=true;details.hidden=false;content.replaceChildren();
  const heading=element('h1',tour.title,'detail-title');heading.id='details-heading';heading.tabIndex=-1;
  content.append(element('p',`${tour.area.toUpperCase()} · SPIELPLATZSPAZIERGANG`,'eyebrow'),heading,element('p',tour.description,'detail-lead'));
  const metrics=element('div',undefined,'detail-metrics');for(const [value,label] of [[km(tour),'Weglänge'],[`≈ ${tour.walkingMinutes} Min.`,'Gehzeit ohne Spielpausen'],[String(tour.stops.length),'Spielplatzstopps']]){const item=element('div');item.append(element('strong',value),element('span',label));metrics.append(item);}content.append(metrics,element('p',`Start: ${tour.start} → Ziel: ${tour.destination}`));
  const layout=element('div',undefined,'detail-layout'),stopsColumn=element('div');stopsColumn.append(element('h2','Deine Spielplatzstopps'));const stopList=element('ol',undefined,'stop-list');
  tour.stops.forEach((stop,index)=>{const li=element('li'),button=element('button',undefined,'stop-button');button.type='button';button.setAttribute('aria-pressed',String(index===0));const text=element('span');text.append(element('strong',stop.name,'stop-name'),element('span',`${index===0?'Start · ':index===tour.stops.length-1?'Ziel · ':''}${stop.location}`,'stop-location'));button.append(element('span',String(index+1),'stop-number'),text);button.addEventListener('click',()=>selectStop(tour,index));li.append(button);stopList.append(li);});
  const info=element('div',undefined,'stop-info');info.id='stop-info';info.setAttribute('aria-live','polite');stopsColumn.append(stopList,info);
  const mapWrap=element('div',undefined,'map-wrap'),mapNode=element('div',undefined,'map');mapNode.id='map';mapNode.setAttribute('aria-label',`Karte der Tour ${tour.title}`);const failure=element('p',undefined,'map-error');failure.id='map-error';failure.hidden=true;failure.setAttribute('role','status');mapWrap.append(mapNode,failure,element('p','Nummern entsprechen der Stoppliste. Grün: Start · Rostrot: Ziel.','map-caption'));layout.append(stopsColumn,mapWrap);content.append(layout);
  content.append(element('p','Berechneter Fußweg, nicht vor Ort geprüft. Achte auf die Beschilderung vor Ort. Gehzeit mit 4 km/h geschätzt, ohne Spielpausen. Kinderwagen- und Rollstuhleignung: keine Angabe.','route-note'));
  const source=element('p',undefined,'source-note');source.append(document.createTextNode(`Spielplätze: ${tour.source} · Abruf ${tour.dataDate.split('-').reverse().join('.')} · tatsächlicher Aktualisierungsstand unbekannt. Wege: Valhalla / OpenStreetMap. `));const link=element('a','Datenquelle ansehen');link.href='https://data.gov.de/suche/daten/spiel-und-sportplatze-in-koln';link.target='_blank';link.rel='noopener';source.append(link);content.append(source);
  if(tour.isDemo)content.append(element('p','Demo · erfundenes Lernbeispiel'));createMap(tour);selectStop(tour,0);heading.focus({preventScroll:true});window.scrollTo(0,0);
}
function route(){
  if(map){map.remove();map=null;}markers=[];const match=location.hash.match(/^#tour\/([^/]+)$/);
  if(match){const tour=validTours.find(t=>t.id===match[1]);if(tour){openTour(tour);return;}overview.hidden=true;details.hidden=false;const heading=element('h1','Tour nicht gefunden','detail-title');heading.id='details-heading';heading.tabIndex=-1;content.replaceChildren(heading,element('p','Dieser Spaziergang ist nicht verfügbar. Über „Alle Spaziergänge“ kommst du zurück.'));heading.focus();return;}
  overview.hidden=false;details.hidden=true;renderOverview();if(previousTour){const button=[...list.querySelectorAll('button')].find(b=>b.dataset.tourId===previousTour);button?.focus({preventScroll:true});previousTour=null;}
}
window.addEventListener('hashchange',route);
const dialog=document.querySelector('#about-dialog');document.querySelector('#about').addEventListener('click',()=>dialog.showModal());document.querySelector('#close-about').addEventListener('click',()=>dialog.close());
route();
