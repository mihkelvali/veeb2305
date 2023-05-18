const http = require("http");

const host = 'localhost';
const port = 8000;

let inimene = {
  eesnimi: 'Mihkel',
  perenimi: 'Väli',
  kasElus: true
}

let matk1 = {
  title: 'mingi pealkiri',
  imageUrl: '',
  description: '',
  participants: ['Mihkel']
}

let matk2 = {
  title: 'mingi pealkiri',
  imageUrl: '',
  description: '',
  participants: ['Mihkel']
}

let matkad = [matk1, matk2]

const requestListener = function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(JSON.stringify(matkad));
};

const server = http.createServer(requestListener);
server.listen(port, host, function () {
    console.log(`Server is running on http://${host}:${port}`);
});
