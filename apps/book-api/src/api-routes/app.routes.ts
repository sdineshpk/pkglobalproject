import * as express from 'express';
import * as bookServ from '../services/book.service';
export const routes = express.Router();

routes.get("/books", bookServ.allBooks);
routes.get("/books/:id", bookServ.getBook);
routes.post("/books", bookServ.addBook);
routes.put("/books/:id", bookServ.updateBook);
routes.delete("/books/:id", bookServ.deleteBook);