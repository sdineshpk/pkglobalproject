import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Book } from '../book.model';
import { BooksFacadeService } from '../../app/ngrx-store/books-facade.service';

@Component({
  selector: 'pkglobal-app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  id = '';
  book: Book = {
    id: '',
    authors: '',
    description: '',
    imageLink: '',
    language: '',
    pageCount: '',
    publisher: '',
    ratingsCount: '',
    title: '',
  };
  bookDetails$: Observable<Book> | undefined;

  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private booksFacadeService: BooksFacadeService
  ) {}
  ngOnInit(): void {
    this.bookDetails$ = this.booksFacadeService.getSelectedItem$;
    this.bookDetails$.subscribe((result) => {
      this.book = result;
    });
  }
  addToCart(): void {
    this.booksFacadeService.addCartItem(this.book);
  }
  buyNow(): void {
    this.booksFacadeService.addBook(this.book);
    this.router.navigate(['/billingpage']);
  }
}
