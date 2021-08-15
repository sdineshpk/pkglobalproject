import * as express from 'express';
import * as bookServ from '../services/book.service';
export const routes = express.Router();

routes.get('/api', (req, res) => {
    res.send({ message: 'Welcome to express-app!' });
});

routes.get("/books", bookServ.allBooks);
routes.get("/book/:id", bookServ.getBook);
routes.post("/book", bookServ.addBook);
routes.put("/book/:id", bookServ.updateBook);
routes.delete("/book/:id", bookServ.deleteBook);