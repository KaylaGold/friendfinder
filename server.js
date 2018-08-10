//DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

let express = require("express");
let bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// Tells node that we are creating an "express" server
let app = express();

// Sets an initial port. We"ll use this later in our listener
let PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER

// Static files
// needs to be called before the routes in order to work
app.use(express.static('app/public'));
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
