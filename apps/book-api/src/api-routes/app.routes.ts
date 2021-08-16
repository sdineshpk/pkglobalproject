import * as express from 'express';
import * as bookServ from '../services/book.service';
import * as reviewServ from '../services/reviews.service';
export const routes = express.Router();

routes.get("/books", bookServ.allBooks);
routes.get("/books/:id", bookServ.getBook);
routes.post("/books", bookServ.addBook);
routes.put("/books/:id", bookServ.updateBook);
routes.delete("/books/:id", bookServ.deleteBook);

routes.get("/books/:id/reviews", reviewServ.allReviews);
routes.get("/books/:id/reviews/:review_id", reviewServ.getReview);
routes.post("/books/:id/reviews", reviewServ.addReview);
routes.put("/books/:id/reviews/:review_id", reviewServ.updateReview);
routes.delete("/books/:id/reviews/:review_id", reviewServ.deleteReview);