import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { BooksFacadeService } from '../ngrx-store/books-facade.service';
import * as fromApp from '../ngrx-store/app.reducer';

import { BillingPageComponent } from './billing-page.component';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from '../ngrx-store/cart.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Book } from '../book.model';

describe('BillingPageComponent', () => {
  let component: BillingPageComponent;
  let fixture: ComponentFixture<BillingPageComponent>;
  let bookService: BooksFacadeService;
  let book: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingPageComponent, NgForm],
      imports: [
        MatSnackBarModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(fromApp.appReducer),
        EffectsModule.forRoot([CartEffects]),
      ],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bookService = TestBed.inject(BooksFacadeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be called onSubmit', () => {
    spyOn(bookService, 'addCollection').and.returnValue(undefined);
    component.isCart = false;
    component.billingForm ==
      new FormGroup({
        name: new FormControl('name', Validators.required),
        email: new FormControl('s@g.com', Validators.required),
        phone: new FormControl(0, Validators.required),
        address: new FormControl('address', Validators.required),
      });
    component.onSubmit(component.billingForm);

    expect(bookService.addCollection).toHaveBeenCalled();
  });

  it('should be called onSubmit with cart true', () => {
    spyOn(bookService, 'addCollection').and.returnValue(undefined);
    component.isCart = true;
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
    component.books = [book];
    component.billingForm ==
      new FormGroup({
        name: new FormControl('name', Validators.required),
        email: new FormControl('s@g.com', Validators.required),
        phone: new FormControl(0, Validators.required),
        address: new FormControl('address', Validators.required),
      });
    component.onSubmit(component.billingForm);

    expect(bookService.addCollection).toHaveBeenCalled();
  });

  it('should be called onSubmit with cart true for empty book list', () => {
    spyOn(bookService, 'addCollection').and.returnValue(undefined);
    component.isCart = true;
    book = {
      id: '1',
      title: '',
      imageLink: '',
      description: '',
      authors: '',
      ratingsCount: '5',
      publisher: 'pub1',
      pageCount: '10',
      language: 'en',
    };
    component.books = [book];
    component.billingForm ==
      new FormGroup({
        name: new FormControl('name', Validators.required),
        email: new FormControl('s@g.com', Validators.required),
        phone: new FormControl(0, Validators.required),
        address: new FormControl('address', Validators.required),
      });
    component.onSubmit(component.billingForm);

    expect(bookService.addCollection).toHaveBeenCalled();
  });
  it('should check name field', () => {
    const name = component.billingForm.controls.name;
    expect(name).toBeTruthy();
  });
  it('should check email field', () => {
    const email = component.billingForm.controls.email;
    expect(email).toBeTruthy();
  });
  it('should check phone field', () => {
    const phone = component.billingForm.controls.phone;
    expect(phone).toBeTruthy();
  });
  it('should check address field', () => {
    const address = component.billingForm.controls.address;
    expect(address).toBeTruthy();
  });
});
