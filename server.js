var express = require("express");
var bodyParser = require("body-parser");
// Express
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routing
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
// Listener
app.listen(PORT,function(){
    console.log("App listening on PORT: " + PORT);
});