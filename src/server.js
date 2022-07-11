import http from 'http';
import WebSocket from 'ws';
import express from 'express';

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('home'));
app.get('/*', (req, res) => res.redirect('/'));

const handleListen = () => console.log(`✅ Listen "http://localhost:${PORT}/"`);
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function handleConnection(socket) {
  console.log(socket);
}
wss.on('connection', handleConnection);

server.listen(PORT, handleListen);
