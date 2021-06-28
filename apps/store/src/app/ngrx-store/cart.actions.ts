import { Action } from '@ngrx/store';
import { Book } from '../book.model';

export const ADD_CARTITEM = '[Cart] ADD_CARTITEM';
export const DELETE_CARTITEM = '[Cart] DELETE_CARTITEM';
export const CLEAR_CART = '[Cart] CLEAR_CART';
export const IS_CART = '[Cart] IS_CART';
export const ADD_BOOKS = '[Cart] ADD_BOOKS';
export const ADD_BOOK = '[Cart] ADD_BOOK';
export const SELECTED_ID = '[Cart] SELECTED_ID';
export const RECENT_SEARCHWORDS = '[Cart] RECENT SEARCH WORDS';

// Effects
export const GET_BOOKSBYNAME = '[Cart] GET_BOOKSBYNAME';

export class AddCartItem implements Action {
  readonly type = ADD_CARTITEM;
  constructor(public payload: Book) {}
}
export class DeletCartItem implements Action {
  readonly type = DELETE_CARTITEM;
  constructor(public payload: string) {}
}
export class ClearCart implements Action {
  readonly type = CLEAR_CART;
}

export class IsCart implements Action {
  readonly type = IS_CART;
  constructor(public payload: boolean) {}
}

export class GetBooksByName implements Action {
  readonly type = GET_BOOKSBYNAME;
  constructor(public payload: string) {}
}
export class AddBooks implements Action {
  readonly type = ADD_BOOKS;
  constructor(public payload: { books: Book[] }) {}
}
export class SelectedId implements Action {
  readonly type = SELECTED_ID;
  constructor(public payload: number) {}
}
export class RecentSearchWords implements Action {
  readonly type = RECENT_SEARCHWORDS;
  constructor(public payload: string) {}
}
export class AddBook implements Action {
  readonly type = ADD_BOOK;
  constructor(public payload: Book) {}
}

export type CartActions =
  | AddCartItem
  | DeletCartItem
  | ClearCart
  | IsCart
  | GetBooksByName
  | AddBooks
  | AddBook
  | SelectedId
  | RecentSearchWords;
