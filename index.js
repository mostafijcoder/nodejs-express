const http = require('http');
const fs = require('fs');
const path = require('path');

function send404Response(res) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Error 404: Page not found!");
    res.end();
}

const mimeLookup = {
    '.js': 'application/javascript',
    '.html': 'text/html',
    '.css': 'text/css'
};

const server = http.createServer((req, res) => {
    console.log('Request received:', req.url);

    if (req.method === 'GET') {
        let fileurl = req.url;
        if (fileurl === '/') fileurl = '/index.html'; // Default file
        let filepath = path.resolve(__dirname, 'public' + fileurl); // Serve from "public" folder

        let fileExt = path.extname(filepath);
        let mimeType = mimeLookup[fileExt];

        if (!mimeType) {
            send404Response(res);
            return;
        }

        // Check if file exists
        fs.access(filepath, fs.constants.F_OK, (err) => {
            if (err) {
                console.log(`File not found: ${filepath}`);
                send404Response(res);
                return;
            }

            res.writeHead(200, { 'Content-Type': mimeType });
            fs.createReadStream(filepath).pipe(res);
        });
    } else {
        send404Response(res);
    }
});

// Start server on port 3006
server.listen(3006, () => {
    console.log('Server running at http://localhost:3006');
});
