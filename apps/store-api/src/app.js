const express=require('express');
const app=express();
const routes = require('../src/app/routes/app.routes');
const db=require('../src/app/db.connect');
//  Connect all our routes to our application
app.use('/', routes);

const port = process.env.port || 3333;
db.connect(err => {
  const collection = db.db("test").collection("devices");
  // perform actions on the collection object
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
    db.close();
  });
  server.on('error', console.error);
  
});


module.exports=app;