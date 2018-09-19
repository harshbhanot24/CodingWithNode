var http = require('http');//this is a simple file handling example
var fs = require('fs');
http.createServer(function (req, res) {
  fs.rename('index.html','index1.html',(err)=>{
if (err) {
 throw err;
};
console.log("renamed");
  });

  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  fs.readFile('index1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8000);// renaming a file example
