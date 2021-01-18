

 //importing route
const express = require('express');
const app = express();
app.use(express.json());

//READ Request Handlers
const routes = require('./api.route');

//  Connect all our routes to our application
app.use('/', routes);

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));