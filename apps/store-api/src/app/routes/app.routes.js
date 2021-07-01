const routes = require('express').Router();
const bookCtrl=require('../controller/book.controller');

routes.get('/api/books/:searchword', bookCtrl.getBookListByName);

module.exports = routes;