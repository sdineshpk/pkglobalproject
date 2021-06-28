import { ActionReducerMap } from '@ngrx/store';
import * as fromCart from './cart.reducer';
import * as fromCollection from './collection.reducer';

export interface AppState {
  cart: fromCart.State;
  collection: fromCollection.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  cart: fromCart.cartReducer,
  collection: fromCollection.collectionReducer,
};
