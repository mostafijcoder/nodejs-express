const http = require("http");
const fs = require("fs");
const path = require("path");

// Define the port number
const PORT = 3003;

// Create an HTTP server
const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} received.`);

  // Serve index.html for the root URL
  let filePath = req.url === "/" ? "index.html" : req.url;
  filePath = path.join(__dirname, filePath);

  // Read the requested file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
