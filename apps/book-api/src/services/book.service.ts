import Book from "../models/book.model";
import { Request, Response } from "express";

export const allBooks = (req: Request, res: Response) => {
    Book.find((err: any, books: any) => {
        if (err) {
          res.send("Error!");
        } else {
          res.send(books);
        }
      });
};
  
export const getBook = (req: Request, res: Response) => {
    Book.findById(req.params.id, (err: any, book: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send(book);
        }
      });
};

export const deleteBook = (req: Request, res: Response) => {
    Book.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Successfully Deleted Book");
        }
      });
};

export const updateBook = (req: Request, res: Response) => {
    console.log(req.body);
    Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err: any, book: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Successfully updated book!");
        }
      }
    );
};

export const addBook = (req: Request, res: Response) => {
    const book = new Book(req.body);

  book.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(book);
    }
  });
}