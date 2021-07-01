const express=require('express');
const app=express();
const routes = require('../src/app/routes/app.routes');

//  Connect all our routes to our application
app.use('/', routes);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

module.exports=app;