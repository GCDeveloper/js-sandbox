const fs = require('fs');

const rs = fs.createReadStream('transform-me.txt');
let output = "";
rs.setEncoding("UTF8");
rs.on('data', function(chunk){
  console.log("chunk of data:\n", chunk);
  output += chunk+"".padEnd(chunk.length, chunk.split("\n")[0])+chunk;
});

rs.on('end', function(){
  const ws = fs.createWriteStream('transform-me.txt');
  ws.write(output, 'UTF8');
  ws.end();
});
