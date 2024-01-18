const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const PORT = 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/status', (request, response) => 
    response.json({clients: clients.length})
);

let clients = [];
let facts = [];

function addNewClient(newClient = { id, response }) { 
    clients.push(newClient);
}
function addFact(req, res, next) {
    const newFact = req.params['id'];

    facts.push(newFact);
    res.json(newFact)

    sendEventsToAll(newFact);
}


function sendEventsToAll(newFact) {
    clients.forEach(client => client.response.write(`data: ${JSON.stringify(newFact)}\n\n`))
}

function eventsHandler(request, response, next) {
    const headers = {
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache'
    };

    response.writeHead(200, headers);
  
    const data = `data: ${JSON.stringify(facts)}\n\n`;

    response.write(data);

    const clientId = Date.now();
    addNewClient({ id: clientId, response});

    request.on('close', () => {
        console.log(`${clientId} Connection closed`);

        clients = clients.filter(client => client.id !== clientId);
    });
}

app.get('/events', eventsHandler);

app.post('/fact/:id', addFact);

app.listen(PORT, () => {
  console.log(`Events service listening at localhost:${PORT}`)
})