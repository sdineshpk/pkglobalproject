import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import * as fromApp from './app.reducer';
import { Book } from '../book.model';

import { BooksFacadeService } from './books-facade.service';
import { CartEffects } from './cart.effects';
import * as cartActions from './cart.actions';
import { Collection } from '../collection.model';

describe('BooksFacadeService', () => {
  let service: BooksFacadeService;
  let store: Store<fromApp.AppState>;
  let book: Book;
  let collection:Collection;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksFacadeService],
      imports: [
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([CartEffects]),
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(BooksFacadeService);
    store = TestBed.inject(Store);
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
    collection ={
      title: 'Angular',
      imgLink: '/',
      description: 'desc1',
      authors: 'author1',    
      name: 'test',
      email: 'test@email.com',
      phone: 1221321,
      address: 'sd'
    }
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should add the book to items of store', () => {
    service.addCartItem(book);

    store.select('cart').subscribe((state) => {
      expect(state.cartItems.length).toEqual(1);
    });
  });
  it('should set the selectedId in cart store', () => {
    service.setSelectedId(1);

    store.select('cart').subscribe((state) => {
      expect(state.selectedId).toEqual(1);
    });
  });

  it('should set the updateCart in cart store', () => {
    service.updateCart(true);

    store.select('cart').subscribe((state) => {
      expect(state.isCart).toEqual(true);
    });
  });
  it('should deleteItem from cart items in store', async () => {
    store.dispatch(new cartActions.AddCartItem(book));

    service.deleteItem('1');
    store.select('cart').subscribe((state) => {
      expect(state.cartItems.length).toEqual(0);
    });
  });
  it('should clear items from cart items in store', async () => {
    store.dispatch(new cartActions.AddCartItem(book));

    service.clearItems();
    store.select('cart').subscribe((state) => {
      expect(state.cartItems.length).toEqual(0);
    });
  });
  it('should add book in collection using store', async () => {
    //store.dispatch(new cartActions.AddCartItem(book));

    service.addBook(book);
    store.select('collection').subscribe((state) => {
      expect(state.collections.length).toEqual(1);
    });
  });
  it('should add collection using store', async () => {
    service.addBook(book);
    service.addCollection(collection);
    store.select('collection').subscribe((state) => {
      expect(state.collections.length).toEqual(1);
    });
  });
});
