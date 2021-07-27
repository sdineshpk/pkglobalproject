import * as cartActions from '../ngrx-store/cart.actions';

describe('CartActions', () => {
  it('should create cart actions', () => {
    expect(cartActions).toBeTruthy();
  });
  it('should create cartActions- AddCartItem', () => {
    const action = new cartActions.AddCartItem({id:"",title:"",ratingsCount:"",publisher:"",pageCount:"",language:"",imageLink:"",description:"",authors:""});
    expect(action.type).toEqual(cartActions.ADD_CARTITEM);
  });
  it('should create cartActios- DeletCartItem', () => {
    const action = new cartActions.DeletCartItem("");
    expect(action.type).toEqual(cartActions.DELETE_CARTITEM);
  });
  it('should create cartActios- ClearCart', () => {
    const action = new cartActions.ClearCart();
    expect(action.type).toEqual(cartActions.CLEAR_CART);
  });
  it('should create cartActios- IsCart', () => {
    const action = new cartActions.IsCart(true);
    expect(action.type).toEqual(cartActions.IS_CART);
  });
  it('should create cartActios- GetBooksByName', () => {
    const action = new cartActions.GetBooksByName("");
    expect(action.type).toEqual(cartActions.GET_BOOKSBYNAME);
  });
  it('should create cartActios- AddBooks', () => {
    const action = new cartActions.AddBooks({books:[]});
    expect(action.type).toEqual(cartActions.ADD_BOOKS);
  });
  it('should create cartActios- SelectedId', () => {
    const action = new cartActions.SelectedId(0);
    expect(action.type).toEqual(cartActions.SELECTED_ID);
  });
  it('should create cartActios- recentSearchWords', () => {
    const action = new cartActions.RecentSearchWords("");
    expect(action.type).toEqual(cartActions.RECENT_SEARCHWORDS);
  });
  it('should create AddBook Action', () => {
    const action = new cartActions.AddBook({id:"",title:"",ratingsCount:"",publisher:"",pageCount:"",language:"",imageLink:"",description:"",authors:""});
    expect(action.type).toEqual(cartActions.ADD_BOOK);
  });
});
