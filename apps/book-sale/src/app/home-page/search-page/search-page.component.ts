import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchWord = '';
  items: Book[] = [];
  subscriptions: Subscription[] = [];
  searchForm = this.fb.group({
    searchWord: ['', Validators.required],
  });

  constructor(
    private booksService: BooksService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.searchWord = this.booksService.getSearchKeyWord();

    if (this.searchWord !== '') {
      this.searchForm.setValue({ searchWord: this.searchWord });
      this.subscriptions.push(
        this.booksService
          .getBooksByName(this.searchWord)
          .subscribe((result) => {
            this.items = result;
          })
      );
    }
  }
  onSubmit(): void {
    this.booksService
      .getBooksByName(this.searchForm.controls.searchWord.value)
      .subscribe((result) => {
        this.items = result;
      });
    this.booksService.setSearchKeyWord(
      this.searchForm.controls.searchWord.value
    );
  }
  getBookDetails(id: number): void {
      let item:any=this.items[id];
      this.booksService.books$.next(item);
      this.router.navigate(['/home//books']);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

}
