const http = require("http");

const host = 'localhost';
const port = 8000;

let matk1 = {
  title: 'Matk ümber Ülemiste',
  imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipORwhgR234cnj9UsRg1wZAArFXZUHPKUui24bc7=w300-h200-k-no',
  description: 'Jalga panna kõrge säärega saapad!',
  startTime: new Date(2023, 4, 27, 10, 0, 0),
  lat: 59.3763953,
  long: 24.7488814,
  participants: ['Mihkel']
}

let matk2 = {
  title: 'Merematk ümber Suurupi poolsaare',
  imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipN7PyVsqrmPCDXjPRRaNJ5XyPmTkTR3z9baUoiZ=w300-h200-k-no',
  description: 'Alustame Lohusalust, lõpetame Kakumäel',
  startTime: new Date(2023, 5, 24, 19, 30, 0),
  lat: 59.4038059,
  long: 24.2013333,
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
