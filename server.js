//* set up the server (Express), used to handle CRUD requests

const express = require("express")

// use the port initiated by Heroku, or port 3000
const PORT = process.env.PORT || 3000;

// serve static assets(files) from the public directory
app.use(express.static("public"));

// use method inbuilt into express to recognize incoming (POST or PUT) Request Objects as strings or arrays. Called as middleware.
app.use(express.urlencoded({ extended: true}));
// use method inbuilt in express to recognize an incoming (POST or PUT) Request Object as a JSON Object.  Called as middleware.
app.use(express.json());

// set up handlebars - templating engine for node.js
const exphbs = require("express-handlebars");

// configure handlebars as the view engine
app.engine("handlebars", exphbs({ defaultLayout: main}));

// import routes from burgersController.js and give server access
const routes = require("./controllers/burgersController.js");

// express app to use these routes
app.use(routes);

// start server listening for client requests
app.listen(PORT, function(){
    // log when server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

