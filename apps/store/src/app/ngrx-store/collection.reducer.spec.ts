import * as CollectionActions from './collection.actions';
import * as CollectionReducer from '../ngrx-store/collection.reducer';
import { Collection } from '../collection.model';

describe('CollectionReducer', () => {
  let initialState: CollectionReducer.State;
  let collection: Collection;
  beforeEach(() => {
    initialState = CollectionReducer.initialState;
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
    initialState = CollectionReducer.initialState;
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
