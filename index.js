const http = require('http');
const connect = require('connect');

const app = connect();

// Middleware: Echo function for `/echo`
function echo(req, res, next) {
    if (req.url === '/echo') { // Handle only `/echo`
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        req.pipe(res);
    } else {
        next(); // Pass control to the next middleware
    }
}

// Middleware: Default response
function defaultResponse(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Connect!\n');
}

// Register middleware
app.use(echo);
app.use(defaultResponse);

// Create HTTP server
const server = http.createServer(app);

// Start server on port 3008
server.listen(3008, () => {
    console.log('Server running on port 3008');
});
