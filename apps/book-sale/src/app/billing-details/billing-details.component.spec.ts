import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar,  MatSnackBarRef } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksService } from '../books.service';
import { CartService } from '../cart.service';
import { CollectionService } from '../collection.service';

import { BillingDetailsComponent } from './billing-details.component';

describe('BillingDetailsComponent', () => {
  let component: BillingDetailsComponent;
  let fixture: ComponentFixture<BillingDetailsComponent>;
  let mycollectionService: CollectionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingDetailsComponent, NgForm ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule],
    providers: [MatSnackBar,{provide:MatSnackBarRef,useValue:{}},{ provide: Overlay, useValue: {position:OverlayPositionBuilder,create:OverlayRef} },BooksService, CartService, CollectionService],
    schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    mycollectionService = TestBed.inject(CollectionService);
    fixture = TestBed.createComponent(BillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('should be called onSubmit', () => {
    spyOn(mycollectionService, 'addCollection').and.returnValue(undefined);
    component.isCart = false;
    component.onSubmit('name', 's@g.com', 0, 'address');

    expect(mycollectionService.addCollection).toHaveBeenCalled();
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
