import * as CartActions from './cart.actions';
import * as cartReducer from '../ngrx-store/cart.reducer';
import { Book } from '../book.model';

describe('CartReducer', () => {
  let initialState: cartReducer.State;
  let book: Book;
  beforeEach(() => {
    initialState = cartReducer.initialState;
    book = {
      id: '1',
      title: 'title',
      imageLink: '',
      description: '',
      authors: '',
      ratingsCount: '',
      publisher: '',
      language: '',
      pageCount: '',
    };
  });
  afterEach(() => {
    initialState = cartReducer.initialState;
  });

  it('should create cart reducer', () => {
    expect(cartReducer.cartReducer).toBeTruthy();
  });

  it('should return the default state', () => {
    const state = cartReducer.cartReducer(undefined, { type: null });

    expect(state).toBe(initialState);
  });

  it('should add book to store CartItems', () => {
    const action = new CartActions.AddCartItem(book);
    const state = cartReducer.cartReducer(initialState, action);

    expect(state.cartItems.length).toEqual(1);
    expect(state.cartItems[0]).toEqual(book);
  });
  it('should delete book from store CartItems', () => {
    const addAction = new CartActions.AddCartItem(book);
    const addState = cartReducer.cartReducer(initialState, addAction);
    expect(addState.cartItems.length).toEqual(1);

    const deleteAction = new CartActions.DeletCartItem('1');
    const state = cartReducer.cartReducer(addState, deleteAction);

    expect(state.cartItems.length).toEqual(0);
  });
  it('should clear cart from store CartItems', () => {
    const addAction = new CartActions.AddCartItem(book);
    const addState = cartReducer.cartReducer(initialState, addAction);
    expect(addState.cartItems.length).toEqual(1);

    const clearAction = new CartActions.ClearCart();
    const state = cartReducer.cartReducer(addState, clearAction);

    expect(state.cartItems.length).toEqual(0);
  });
  it('should add search word to store recentSearchWords', () => {
    const action = new CartActions.RecentSearchWords('Angular');
    const state = cartReducer.cartReducer(initialState, action);

    expect(state.recentSearchWords.length).toEqual(1);
    expect(state.recentSearchWords[state.recentSearchWords.length - 1]).toEqual(
      'Angular'
    );
  });

  it('should add search word to store recentSearchWords when same word search twise',()=>{
    const action = new CartActions.RecentSearchWords('Angular');
    const state = cartReducer.cartReducer(initialState, action);
    const state2 = cartReducer.cartReducer(state, action);

    expect(state2.recentSearchWords.length).toEqual(1);
    expect(state2.recentSearchWords[state.recentSearchWords.length - 1]).toEqual(
      'Angular'
    );
  })
  it('should add book to store Cart', () => {
    const action = new CartActions.AddBook(book);
    const state = cartReducer.cartReducer(initialState, action);

    expect(state.book).toEqual(book);
    expect(state.book.title).toEqual('title');
  });

  it('should add mutlitple book to store Cart', () => {
    const bookList={books:[book,book]};
    const action = new CartActions.AddBooks(bookList)
    const state = cartReducer.cartReducer(initialState, action);

    expect(state.items.length).toEqual(2);
    expect(state.items).toEqual(bookList.books);
  });
  it('should add books for failure case to store Cart', () => {
    const action = new CartActions.AddBooksFailure("Not Found")
    const state = cartReducer.cartReducer(initialState, action);
    expect(state.error).toEqual("Not Found");
  });
});
