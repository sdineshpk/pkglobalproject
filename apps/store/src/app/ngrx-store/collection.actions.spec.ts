import * as collectionActions from '../ngrx-store/collection.actions';
import { Collection } from '../collection.model';
describe('CollectionActions', () => {
  let collection: Collection;
  beforeEach(() => {
    collection = {
      title: '',
      imgLink: '',
      description: '',
      authors: '',
      name: '',
      email: '',
      phone: 0,
      address: '',
    };
  });
  it('should create collection actions', () => {
    expect(collectionActions).toBeTruthy();
  });
  it('should create AddCollection Action', () => {
    const action = new collectionActions.AddCollection(collection);
    expect(action.type).toEqual(collectionActions.ADD_COLLECTION);
  });
});
