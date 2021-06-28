import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store, StoreModule } from '@ngrx/store';
import { BooksFacadeService } from '../ngrx-store/books-facade.service';
import * as fromApp from '../ngrx-store/app.reducer';

import { BillingPageComponent } from './billing-page.component';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from '../ngrx-store/cart.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BillingPageComponent', () => {
  let component: BillingPageComponent;
  let fixture: ComponentFixture<BillingPageComponent>;
  let bookService: BooksFacadeService;
  let store: Store<fromApp.AppState>;

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
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be called onSubmit', () => {
    spyOn(bookService, 'addCollection').and.returnValue(undefined);
    component.isCart = false;
    component.onSubmit('name', 's@g.com', 0, 'address');

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
