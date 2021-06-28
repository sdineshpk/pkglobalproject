import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { Book } from '../../book.model';
import { BooksFacadeService } from '../../ngrx-store/books-facade.service';

import { CartItemComponent } from './cart-item.component';
import * as fromApp from '../../ngrx-store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from '../../ngrx-store/cart.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let books: Book[];
  let bookService: BooksFacadeService;
  let store: Store<fromApp.AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([CartEffects]),
      ],

      providers: [BooksFacadeService],
    }).compileComponents();
    bookService = TestBed.inject(BooksFacadeService);
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    books = [
      {
        id: '1',
        title: 'angular',
        imageLink: 'imagelink',
        description: 'desc',
        authors: 'authors',
        ratingsCount: '3',
        publisher: 'pub',
        pageCount: '10',
        language: 'en',
      },
      {
        id: '2',
        title: 'angular',
        imageLink: 'imagelink',
        description: 'desc',
        authors: 'authors',
        ratingsCount: '3',
        publisher: 'pub',
        pageCount: '10',
        language: 'en',
      },
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 0 cartitems to start', () => {
    component.cartItems$.subscribe((result) => {
      expect(result.length).toEqual(0);
    });
  });
  it('should delete an item from  cartitems when delteItem is called', () => {
    bookService.addCartItem(books[0]);
    bookService.addCartItem(books[1]);

    component.deleteItem('1');

    component.cartItems$.subscribe((result) => {
      expect(result.length).toEqual(1);
    });
  });
  it('should not delete an item from  cartitems when delteItem is called with wrong id', () => {
    bookService.addCartItem(books[0]);
    bookService.addCartItem(books[1]);

    component.deleteItem('3');

    component.cartItems$.subscribe((result) => {
      expect(result.length).toEqual(2);
    });
  });
});
