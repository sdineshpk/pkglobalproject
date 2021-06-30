import { Collection } from '../collection.model';
import * as CollectionActions from './collection.actions';

export interface State {
  collections: Collection[];
}

export const initialState: State = {
  collections: [],
};

export function collectionReducer(
  state: State = initialState,
  action: CollectionActions.CollectionActions
): State {
  switch (action.type) {
    case CollectionActions.ADD_COLLECTION:
      return {
        ...state,
        collections: [...state.collections, action.payload],
      };
    default:
      return state;
  }
}
