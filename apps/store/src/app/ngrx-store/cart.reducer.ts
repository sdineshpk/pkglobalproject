import { Book } from '../book.model';
import * as CartActions from './cart.actions';

export interface State {
  cartItems: Book[];
  isCart: boolean;
  items: Book[];
  searchWord: string;
  selectedId: number;
  recentSearchWords: string[];
  book: Book;
  error:string | null;
}

export const initialState: State = {
  cartItems: [],
  isCart: false,
  items: [],
  searchWord: '',
  selectedId: -1,
  recentSearchWords: [],
  book: {
    id: '',
    title: '',
    imageLink: '',
    description: '',
    authors: '',
    ratingsCount: '',
    publisher: '',
    pageCount: '',
    language: '',
  },
  error:null
};

export function cartReducer(
  state: State = initialState,
  action: CartActions.CartActions | any
): State {
  let searchWords,index;
  switch (action.type) {
    case CartActions.ADD_CARTITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        isCart: false,
      };
    case CartActions.DELETE_CARTITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((book) => {
          return book.id !== action.payload;
        }),
        isCart: false,
      };
    case CartActions.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        isCart: false,
      };
    case CartActions.IS_CART:
      return {
        ...state,
        isCart: action.payload,
      };
    case CartActions.ADD_BOOKS:
      return {
        ...state,
        items: action.payload.books,
      };
    case CartActions.ADD_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case CartActions.SELECTED_ID:
      return {
        ...state,
        selectedId: action.payload,
      };
    case CartActions.RECENT_SEARCHWORDS:
      state.searchWord = action.payload.trim();
      searchWords = [...state.recentSearchWords, state.searchWord];
    // Delete searchword if it already exists without changing last item which will be accessed in search comp
    index = searchWords.findIndex((value) => value === state.searchWord);
      if (index !== searchWords.length - 1) {
        searchWords.splice(index, 1);
      }
      return {
        ...state,
        recentSearchWords: [...searchWords],
      };
    default:
      return state;
  }
}
