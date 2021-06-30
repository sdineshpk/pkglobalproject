import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CollectionModule } from './collection/collection.model';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  collections: CollectionModule[] = [];
  books: Book[] = [];
  mycollection$ = new BehaviorSubject(this.books);

  getCollections(): CollectionModule[] {
    return this.collections;
  }
  addCollection(collection: CollectionModule): void {
    this.collections.push(collection);
  }
}
