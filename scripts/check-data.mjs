import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const tours=vm.runInNewContext(fs.readFileSync('src/tours.js','utf8')+';tours');
assert.equal(tours.length,3);assert.equal(new Set(tours.map(t=>t.id)).size,3);
function meters(a,b){const rad=n=>n*Math.PI/180;const dlat=rad(a[0]-b[0]),dlon=rad(a[1]-b[1]);const h=Math.sin(dlat/2)**2+Math.cos(rad(a[0]))*Math.cos(rad(b[0]))*Math.sin(dlon/2)**2;return 6371000*2*Math.asin(Math.sqrt(h));}
for(const t of tours){
 assert.ok(t.stops.length>=2&&t.path.length>10);assert.ok(t.distanceKm>0&&t.walkingMinutes>0);
 assert.equal(t.isDemo,false);assert.ok(t.sourceUrl.startsWith('https://'));
 assert.ok(t.path.every(p=>p[0]>50.8&&p[0]<51.1&&p[1]>6.8&&p[1]<7.2));
 for(const stop of t.stops){const nearest=Math.min(...t.path.map(p=>meters(p,[stop.lat,stop.lon])));assert.ok(nearest<100,`${stop.name}: Weg ${nearest} m entfernt`);}
 const length=t.path.slice(1).reduce((sum,p,i)=>sum+meters(p,t.path[i]),0)/1000;
 assert.ok(Math.abs(length-t.distanceKm)<0.15,`${t.id}: Länge und Geometrie widersprechen sich`);
 console.log(`PASS ${t.id}: ${t.stops.length} Stopps, ${length.toFixed(2)} km, Weg nahe allen Stopps`);
}
