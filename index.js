// create an express server
    const express = require('express');
    const app = express();    
    const port = 5001;
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const mytodo= {
        id: 1,
        title: "My first todo",
        completed: false
    };
    // another route for json response
        app.get("/", (req, res) => {
            res.json(mytodo);
        });
    
    // put route
        app.put("/", (req, res) => {
            const body=req.body;
            newtodo=body.title;
            mytodo.title=newtodo;
            console.log(newtodo);
            res.json(mytodo);
        }
    );
        app.get('/html', (req, res) => {
            res.sendFile(__dirname + '/main.html');
            });
        // make the server listen to requests
        app.listen(port);
            
