import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { Book } from '../book.model';
import { BooksFacadeService } from '../ngrx-store/books-facade.service';
import * as fromApp from '../ngrx-store/app.reducer';

import { BookDetailsComponent } from './book-details.component';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from '../ngrx-store/cart.effects';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let book: Book;
  let bookService: BooksFacadeService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        RouterModule,
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([CartEffects]),
      ],
      providers: [],
    }).compileComponents();
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bookService = TestBed.inject(BooksFacadeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add item to the cart when addToCart is called', async () => {
    book = {
      id: '1',
      title: 'Angular',
      imageLink: '/',
      description: 'desc1',
      authors: 'author1',
      ratingsCount: '5',
      publisher: 'pub1',
      pageCount: '10',
      language: 'en',
    };
    component.book = book;

    component.addToCart();

    await bookService.getAllCartItems$.subscribe((result) => {
      expect(result.length).toEqual(1);
    });
  });

  it('should buy item after added to the cart when buyNow is called', async () => {
    const navigateSpy = spyOn(router, 'navigate');
    book = {
      id: '1',
      title: 'Angular',
      imageLink: '/',
      description: 'desc1',
      authors: 'author1',
      ratingsCount: '5',
      publisher: 'pub1',
      pageCount: '10',
      language: 'en',
    };
    component.book = book;

    component.buyNow();

    await bookService.getBookInCollection$.subscribe((result) => {
      expect(result).toEqual(book);
    });    
    expect(navigateSpy).toHaveBeenCalledWith(["/billingpage"]);
  });
});
