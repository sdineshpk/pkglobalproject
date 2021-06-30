import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
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
      declarations: [BillingDetailsComponent, NgForm],
      imports: [BrowserAnimationsModule, ReactiveFormsModule],
      providers: [
        MatSnackBar,
        { provide: MatSnackBarRef, useValue: {} },
        {
          provide: Overlay,
          useValue: { position: OverlayPositionBuilder, create: OverlayRef },
        },
        BooksService,
        CartService,
        CollectionService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    mycollectionService = TestBed.inject(CollectionService);
    fixture = TestBed.createComponent(BillingDetailsComponent);
    component = fixture.componentInstance;
    component.books = [
      {
        id: 'X-5YBQAAQBAJ',
        authors: 'Mikael Krogerus',
        description:
          "This pocket-sized compendium of sixty four of the world's most useful tests is a vital tool for anyone looking to gauge their abilities and improve their performance. From intelligence to personality type via creativity and leadership skills, Krogerus and Tschppeler will help you see how you fare on every essential trait you need to succeed. Beyond your own abilities, The Test Book also provides sample diagnostic tests for your career, relationship and business, sketching out not just what your skills are but how well you're utilising them too. Some are old favourites - GMAT, MBTI, IQ, EQ - and many more are little-known tests with genuinely new insights. Every single one has been condensed to just a few pages, leading you to the quickest route to self-knowledge. With in-depth analysis of the history, strengths and weaknesses of each test and what your answers mean for you, The Test Book is the fastest and most entertaining way to equip yourself for happiness and success.",
        imageLink:
          'http://books.google.com/books/content?id=X-5YBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        language: 'en',
        pageCount: '298',
        publisher: 'Profile Books',
        title: 'The Test Book',
        ratingsCount: '3',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be called onSubmit', () => {
    spyOn(mycollectionService, 'addCollection').and.returnValue(undefined);
    component.isCart = false;
    component.billingForm = new FormGroup({
      name: new FormControl('name', Validators.required),
      email: new FormControl('s@g.com', Validators.required),
      phone: new FormControl(0, Validators.required),
      address: new FormControl('address', Validators.required),
    });
    component.onSubmit(component.billingForm);

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
