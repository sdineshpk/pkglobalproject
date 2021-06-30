import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Book } from '../book.model';
import { BooksService } from '../books.service';
import { CartService } from '../cart.service';
import { CollectionService } from '../collection.service';

import { BillingDetailsComponent } from './billing-details.component';
class MatSnackBarStub {
  openFromComponent() {
    return {
      onAction: () => of({}),
    };
  }
}
describe('BillingDetailsComponent', () => {
  let component: BillingDetailsComponent;
  let fixture: ComponentFixture<BillingDetailsComponent>;
  let mycollectionService: CollectionService;
  let cartService: CartService;
  const bookData: Book[] = [
    {
      id: 'X-5YBQAAQBAJ',
      authors: 'Mikael Krogerus',
      description: 'Description.',
      imageLink:
        'http://books.google.com/books/content?id=X-5YBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
      language: 'en',
      pageCount: '298',
      publisher: 'Profile Books',
      title: 'The Test Book',
      ratingsCount: '3',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingDetailsComponent, NgForm],
      imports: [BrowserAnimationsModule, ReactiveFormsModule],
      providers: [
        { provide: MatSnackBar, useClass: MatSnackBarStub },
        BooksService,
        CartService,
        CollectionService,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    mycollectionService = TestBed.inject(CollectionService);
    cartService = TestBed.inject(CartService);
    fixture = TestBed.createComponent(BillingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be called onSubmit', () => {
    spyOn(mycollectionService, 'addCollection').and.returnValue(undefined);
    component.isCart = false;
    component.books = bookData;
    component.billingForm = new FormGroup({
      name: new FormControl('name', Validators.required),
      email: new FormControl('s@g.com', Validators.required),
      phone: new FormControl(0, Validators.required),
      address: new FormControl('address', Validators.required),
    });
    component.onSubmit(component.billingForm);

    expect(mycollectionService.addCollection).toHaveBeenCalled();
  });

  it('should be called onSubmit when data come from cart', () => {
    spyOn(mycollectionService, 'addCollection').and.returnValue(undefined);
    spyOn(cartService, 'getCartItems').and.returnValue(bookData);
    component.ngOnInit();
    component.billingForm = new FormGroup({
      name: new FormControl('name', Validators.required),
      email: new FormControl('s@g.com', Validators.required),
      phone: new FormControl(0, Validators.required),
      address: new FormControl('address', Validators.required),
    });
    component.onSubmit(component.billingForm);

    expect(mycollectionService.addCollection).toHaveBeenCalled();
  });

  it('when input data not valid',()=>{
    spyOn(mycollectionService, 'addCollection').and.returnValue(undefined);
    component.isCart = false;
    component.books = bookData;
    component.billingForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl(0, Validators.required),
      address: new FormControl('', Validators.required),
    });
    component.onSubmit(component.billingForm);

    expect(mycollectionService.addCollection).toHaveBeenCalled();
  })
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
