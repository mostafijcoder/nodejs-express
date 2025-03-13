const http = require('http');
const connect = require('connect');

function echo(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('You have reached the /echo endpoint. Echoing your request:\n\n');

    req.pipe(res); // Echo back the request body
}

// Create a Connect app and register middleware
const app = connect();
app.use(echo);

// Create an HTTP server with the Connect app
const server = http.createServer(app);

// Start the server on port 3008
server.listen(3008, () => {
    console.log('Server running on http://localhost:3008');
});
