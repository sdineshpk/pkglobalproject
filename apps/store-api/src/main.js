const express=require('express');
const app=express();
const bookCtrl=require('./app/controller/book.controller');

app.get('/api/books/:searchword', bookCtrl.getBookListByName);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

module.exports=app;