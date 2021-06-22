import { TestBed } from '@angular/core/testing';
import { Book } from './book.model';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let book: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    book = {
      id: '1',
      title: 'Angular',
      imageLink: '/',
      description: 'desc1',
      authors: 'author1',
      ratingsCount: '5',
      publisher: 'pub1',
      pageCount: '10',
      language: 'en',
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have 0 cartItems to start', () => {
    expect(service.cartItems.length).toEqual(0);
  });
  it('should add item to the cart when addCartItem is called', () => {
    service.addCartItem(book);

    expect(service.cartItems.length).toEqual(1);
  });
  it('should delete item from cart when deletItem is called', () => {
    service.addCartItem(book);

    service.deleteItem('1');

    expect(service.cartItems.length).toEqual(0);
  });
  it('should clear all cartitems when clearItems is called', () => {
    service.addCartItem(book);

    service.clearItems();

    expect(service.cartItems.length).toEqual(0);
  });
});
