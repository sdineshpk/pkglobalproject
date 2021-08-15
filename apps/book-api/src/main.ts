import * as express from 'express';
//import * as db from './models/db.connect'
import {routes} from './api-routes/app.routes'
const app = express();

app.use('/',routes);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

// db.client.connect(err => {
//    // const collection = db.client.db("test").collection("devices");
//     // perform actions on the collection object 
// const port = process.env.port || 3333;
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
//   //db.client.close();
// });
// server.on('error', console.error);
// });
