import * as cartActions from '../ngrx-store/cart.actions';

describe('CartActions', () => {
  it('should create cart actions', () => {
    expect(cartActions).toBeTruthy();
  });
  it('should create cartActions- AddCartItem', () => {
    const action = new cartActions.AddCartItem(null);
    expect(action.type).toBeTruthy(cartActions.ADD_CARTITEM);
  });
  it('should create cartActios- DeletCartItem', () => {
    const action = new cartActions.DeletCartItem(null);
    expect(action.type).toBeTruthy(cartActions.DELETE_CARTITEM);
  });
  it('should create cartActios- ClearCart', () => {
    const action = new cartActions.ClearCart();
    expect(action.type).toBeTruthy(cartActions.CLEAR_CART);
  });
  it('should create cartActios- IsCart', () => {
    const action = new cartActions.IsCart(null);
    expect(action.type).toBeTruthy(cartActions.IS_CART);
  });
  it('should create cartActios- GetBooksByName', () => {
    const action = new cartActions.GetBooksByName(null);
    expect(action.type).toBeTruthy(cartActions.GET_BOOKSBYNAME);
  });
  it('should create cartActios- AddBooks', () => {
    const action = new cartActions.AddBooks(null);
    expect(action.type).toBeTruthy(cartActions.ADD_BOOKS);
  });
  it('should create cartActios- SelectedId', () => {
    const action = new cartActions.SelectedId(null);
    expect(action.type).toBeTruthy(cartActions.SELECTED_ID);
  });
  it('should create cartActios- recentSearchWords', () => {
    const action = new cartActions.RecentSearchWords(null);
    expect(action.type).toBeTruthy(cartActions.RECENT_SEARCHWORDS);
  });
  it('should create AddBook Action', () => {
    const action = new cartActions.AddBook(null);
    expect(action.type).toBeTruthy(cartActions.ADD_BOOK);
  });
});
