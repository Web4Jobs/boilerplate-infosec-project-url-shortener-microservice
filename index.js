require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use('/public', express.static(`${process.cwd()}/public`));
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

var { registerTestRoutes } = require('w4j-test-utils');
registerTestRoutes(app);

/*
Your code Goes Here
*/






























// Listen on port set in environment variable or default to 3000
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
