// create an express server
const express = require('express');
const app = express();
const port = 3000;
// create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World');
    }
);
// another route for json response
app.get('/json', (req, res) => {
    res.json({ title:'hello', id: 1, message: 'Hello World'});
    }
);
// anothsendFile

app.get('/html', (req, res) => {
    res.sendFile(__dirname + '/main.html');
    });
// make the server listen to requests
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    }
);