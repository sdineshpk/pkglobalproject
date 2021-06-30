import { Action } from '@ngrx/store';
import { Collection } from '../collection.model';

export const ADD_COLLECTION = 'ADD_COLLECTION';

export class AddCollection implements Action {
  readonly type = ADD_COLLECTION;
  constructor(public payload: Collection) {}
}
export type CollectionActions = AddCollection | null;
