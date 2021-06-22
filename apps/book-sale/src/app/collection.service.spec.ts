import { TestBed } from '@angular/core/testing';

import { CollectionService } from './collection.service';
import { CollectionModule } from './collection/collection.model';

describe('CollectionService', () => {
  let service: CollectionService;
  let collection: CollectionModule;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionService);
    collection = {
      title: 'angular',
      description: 'desc',
      imgLink: '/',
      authors: 'authors',
      name: 'name',
      email: 'email',
      phone: 9876543210,
      address: 'address',
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should have 0 collections to start', () => {
    expect(service.collections.length).toEqual(0);
  });
  it('should add a collection when addCollection is called', () => {
    service.addCollection(collection);

    expect(service.collections.length).toEqual(1);
  });
});
