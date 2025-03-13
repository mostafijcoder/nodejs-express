const http = require('http');
const connect = require('connect');

// function to check if the client request is json, if not passes control to next middleware
// Otherwise, it waits for the client request to completely stream to the server and, once done,tries to parse the data using JSON.parse
//If it succeeds, Whether the JSON was parsed and req.body is set.next middleware.

function parseJSON(req, res, next) {
    if (req.headers ['content-type'] === 'application/json') { 
        // load all the data from the client request
        let readData = '';
        req.on('readable', (chunk) => {
            readData += chunk;
        });
        
        //try to parse the data as JSON
        req.on('end', () => {
            try {
                req.body = JSON.parse(readData);
                next();
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid JSON');
            }
        });
    }

        else {
            next();
        }
    }

// Because of chaining any middleware that comes after our parseJSON, middleware will get access to the //parsed JSON object in req.body if the request contains valid JSON. 
//we have a simple connect server with an added middleware that uses the results of parseJSON to tell the client about the value of req.body.foo if valid JSON is found.

const app = connect();

app.use(parseJSON)
   .use((req, res) => {
       if (req.body) {
           res.end(`The value of req.body.foo is ${req.body.foo}`);
       } else {
           res.end('No JSON found');
       }
   });

// Start server on port 3008
http.createServer(app).listen(3009, () => {
    console.log('Server running on http://localhost:3009');
});

/*If you test it using curl, you will see the value of the passed JSON object’s foo member if present. Otherwise, if 
you pass an invalid JSON or a non-JSON request, you will get the “no JSON detected” message, as demonstrated in the following examples:

$ curl http://127.0.0.1:3008/ -H "content-type: application/json" -d "{\"foo\":123}"
JSON parsed!, value of foo: 123
$ curl http://127.0.0.1:3008/ -H "content-type: application/json" -d "{\"foo\":123,}"
no JSON detected! */
