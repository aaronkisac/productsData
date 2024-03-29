// Import express
let express = require('express');
var cors = require('cors')

// Import Body parser
let bodyParser = require('body-parser');
// Initialise the app
let app = express();
// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
// Connect to Mongoose and set connection variable

// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/',cors(), (req, res) => res.send('Wellcome to Online Shop'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port

app.listen(port, function () {
  console.log("Running RestHub on port " + port);
});
