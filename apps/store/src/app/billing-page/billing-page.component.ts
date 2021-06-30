import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book.model';
import { Collection } from '../collection.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakBarComponent } from '../snak-bar/snak-bar.component';
import { BooksFacadeService } from '../../app/ngrx-store/books-facade.service';

@Component({
  selector: 'pkglobal-app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.css'],
})
export class BillingPageComponent implements OnInit {
  isValid = true;
  books: Book[] = [];
  collection: Collection = {
    title: '',
    imgLink: '',
    description: '',
    authors: '',
    name: '',
    email: '',
    phone: 0,
    address: '',
  };
  isCart = false;
  billingForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private booksFacadeService: BooksFacadeService
  ) {}

  ngOnInit(): void {
    this.booksFacadeService.getAllCartItems$.subscribe(
      (result) => (this.books = result)
    );
    this.booksFacadeService.isCart$.subscribe(
      (isCart) => (this.isCart = isCart)
    );
  }
  onSubmit(billingForm: FormGroup): void {
    if (this.isCart) {
      this.books.forEach((book) => {
        this.collection = {
          title: book?.title || '',
          imgLink: book?.imageLink || '',
          description: book?.description || '',
          authors: book?.authors || '',
          name: billingForm.value.name || '',
          email: billingForm.value.email || '',
          phone: billingForm.value.phone || 0,
          address: billingForm.value.address || '',
        };
        this.booksFacadeService.addCollection(this.collection);
      });
      this.booksFacadeService.clearItems();
    } else {
      this.booksFacadeService.getBookInCollection$.subscribe((book) => {
        this.collection = {
          title: book?.title || '',
          imgLink: book?.imageLink || '',
          description: book?.description || '',
          authors: book?.authors || '',
          name: billingForm.value.name || '',
          email: billingForm.value.email || '',
          phone: billingForm.value.phone || 0,
          address: billingForm.value.address || '',
        };
      });
      this.booksFacadeService.addCollection(this.collection);
    }
    this.snackBar.openFromComponent(SnakBarComponent, {
      duration: 2000,
      panelClass: 'blue-snackbar',
    });
  }
}
