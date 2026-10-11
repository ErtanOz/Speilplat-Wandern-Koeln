import fs from 'node:fs';
import path from 'node:path';
fs.mkdirSync('dist',{recursive:true});
for(const name of ['index.html','src','assets'])fs.cpSync(name,path.join('dist',name),{recursive:true});
console.log('Release-Dateien in dist erstellt.');
