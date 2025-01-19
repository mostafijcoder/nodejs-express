// create an express server
const express = require('express');
const app = express();
const port = 3000;
// create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World');
    }
);
// make the server listen to requests
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    }
);