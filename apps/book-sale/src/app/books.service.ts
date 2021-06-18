import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './book.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books$ = new BehaviorSubject(null);
  search = '';
  BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
  books: Book[] = [];

  constructor(private httpClient: HttpClient) {}
  getBooksByName(name: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.BASE_URL + name).pipe(
      map((res: any) => {
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
          this.books.push(book);
        });
        return this.books;
      })
    );
  }
  setSearchKeyWord(search: string): void {
    this.search = search;
  }
  getSearchKeyWord(): string {
    return this.search;
  }
}
