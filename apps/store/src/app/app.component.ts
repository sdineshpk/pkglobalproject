import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { BooksFacadeService } from '../app/ngrx-store/books-facade.service';
import { Book } from './book.model';
import { Collection } from './collection.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  opened = false;
  title = 'store';
  items$: Book[]=[];
  collections$: Collection[]=[];

  constructor(private booksFacadeService: BooksFacadeService) {}
  ngOnInit(): void {
   this.booksFacadeService.getAllCartItems$.subscribe((res:Book[])=>{
    this.items$ = res;
    });
  this.booksFacadeService.getAllCollections$.subscribe((res:Collection[])=>{
    this.collections$ =  res;
    });
  }
}
