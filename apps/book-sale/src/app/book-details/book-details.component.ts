import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books.service';
import { CartService } from '../cart.service';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'pkglobal-app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  id = '';
  bookDetails: Book = {
    id: '',
    title: '',
    imageLink: '',
    description: '',
    authors: '',

    ratingsCount: '',
    publisher: '',
    pageCount: '',
    language: '',
  };
  subscriptions: Subscription[] = [];

  constructor(
    private booksService: BooksService,
    private cartService: CartService,
    private myCollectionService: CollectionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.subscriptions.push(
      this.booksService.books$.subscribe((response: Book[]) => {
        this.bookDetails = response[0];
      })
    );
  }
  addToCart(): void {
    this.cartService.addCartItem(this.bookDetails);
  }
  buyNow(): void {
    const book: Book[] = [];
    book.push(this.bookDetails);
    this.myCollectionService.mycollection$.next(book);
    this.router.navigate(['/home/billingpage']);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
