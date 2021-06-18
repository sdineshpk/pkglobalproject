import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CollectionModule } from './collection/collection.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  collections: CollectionModule[] = [];
  mycollection$ = new BehaviorSubject(null);

  constructor() {}
  getCollections(): CollectionModule[] {
    return this.collections;
  }
  addCollection(collection: CollectionModule): void {
    this.collections.push(collection);
  }
}
