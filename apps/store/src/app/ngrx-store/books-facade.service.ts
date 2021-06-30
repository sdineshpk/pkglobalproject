import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from './app.reducer';
import * as cartActions from './cart.actions';
import * as collectionActions from './collection.actions';
import { Book } from '../../app/book.model';
import { Collection } from '../../app/collection.model';

@Injectable({
  providedIn: 'root',
})
export class BooksFacadeService {
  // Cart Store
  getAllItems$ = this.store.select((state) => state.cart.items);
  getAllCartItems$ = this.store.select((state) => state.cart.cartItems);
  getSelectedItem$ = this.store.select(
    (state) => state.cart.items[state.cart.selectedId]
  );
  isCart$ = this.store.select((state) => state.cart.isCart);
  searchWord$ = this.store.select((state) => state.cart.searchWord);
  getRecentSearWords$ = this.store.select(
    (state) => state.cart.recentSearchWords
  );
  getBookInCollection$ = this.store.select((state) => state.cart.book);

  // Collection store

  getAllCollections$ = this.store.select(
    (state) => state.collection.collections
  );

  constructor(private store: Store<fromApp.AppState>) {}

  getBooksByName(search: string): void {
    this.store.dispatch(new cartActions.RecentSearchWords(search));
    this.store.dispatch(new cartActions.GetBooksByName(search));
  }
  setSelectedId(id: number): void {
    this.store.dispatch(new cartActions.SelectedId(id));
  }
  addCartItem(book: Book): void {
    this.store.dispatch(new cartActions.AddCartItem(book));
  }
  updateCart(flag: boolean): void {
    this.store.dispatch(new cartActions.IsCart(flag));
  }
  deleteItem(id: string): void {
    this.store.dispatch(new cartActions.DeletCartItem(id));
  }
  clearItems(): void {
    this.store.dispatch(new cartActions.ClearCart());
  }

  // Collection API
  addBook(book: Book): void {
    this.store.dispatch(new cartActions.AddBook(book));
  }
  addCollection(collection: Collection): void {
    this.store.dispatch(new collectionActions.AddCollection(collection));
  }
}
