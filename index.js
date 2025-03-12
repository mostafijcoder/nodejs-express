const http = require('http');
const connect = require('connect');
const util = require('util');

// Create a connect dispatcher (middleware handler)
const app = connect();

// Middleware: Logging function
function logit(req, res, next) {
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Call next middleware
}

// Register middleware before starting the server
app.use(logit);

// Create HTTP server with Connect app
const server = http.createServer(app);

// Start server on port 3007
server.listen(3008, () => {
    console.log('Server running on port 3008');
});
