import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect,  ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as cartActions from '../ngrx-store/cart.actions';

export interface Book {
  id: string;
  title: string;
  imageLink: string;
  description: string;
  authors: string;

  ratingsCount: string;
  publisher: string;
  pageCount: string;
  language: string;
}

@Injectable()
export class CartEffects {
  getBooksByName$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(cartActions.GET_BOOKSBYNAME),
      switchMap((bookData: cartActions.GetBooksByName) => {
        return this.httpClient
          .get<Book[]>('https://www.googleapis.com/books/v1/volumes?q=' + bookData.payload)
          .pipe(
            map((res: any) => {
              const books:Book[] = [];
              res.items.map((item: any) => {
                const book: Book = {
                  id: item.id,
                  title: item.volumeInfo.title,
                  imageLink: item.volumeInfo?.imageLinks?.thumbnail,
                  description: item.volumeInfo.description,
                  authors: item.volumeInfo.authors,
                  ratingsCount: item.volumeInfo.ratingsCount,
                  publisher: item.volumeInfo.publisher,
                  pageCount: item.volumeInfo.pageCount,
                  language: item.volumeInfo.language,
                };
                books.push(book);
              });
              return new cartActions.AddBooks({ books });
            }),
            catchError((errorRes) => {
              return of(errorRes);
            })
          );
      })
    );
  });
  constructor(private actions$: Actions, private httpClient: HttpClient) {}
}
