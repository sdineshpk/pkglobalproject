import { Action, State } from '@ngrx/store';
import * as CollectionActions from './collection.actions';
import * as CollectionReducer from '../ngrx-store/collection.reducer';
import { Book } from '../book.model';
import { Collection } from '../collection.model';

describe('CollectionReducer', () => {
  let initialState: CollectionReducer.State;
  let book: Book;
  let collection: Collection;
  beforeEach(() => {
    initialState = CollectionReducer.initialState;
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
    collection = {
      title: 'title',
      imgLink: '',
      description: '',
      authors: '',
      name: '',
      email: '',
      phone: 0,
      address: '',
    };
  });
  afterEach(() => {
    initialState = null;
  });

  it('should create cart reducer', () => {
    expect(CollectionReducer.collectionReducer).toBeTruthy();
  });

  it('should return the default state', () => {
    const state = CollectionReducer.collectionReducer(undefined, {
      type: null,
    });

    expect(state).toBe(initialState);
  });

  it('should add collection to store Collections', () => {
    const action = new CollectionActions.AddCollection(collection);
    const state = CollectionReducer.collectionReducer(initialState, action);

    expect(state.collections.length).toEqual(1);
    expect(state.collections[0].title).toEqual('title');
  });
});
