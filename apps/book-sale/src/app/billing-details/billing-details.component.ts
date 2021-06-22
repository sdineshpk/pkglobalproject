import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Book } from '../book.model';
import { CartService } from '../cart.service';
import { CollectionService } from '../collection.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakBarComponent } from '../snak-bar/snak-bar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit, OnDestroy {
  isValid = true;
  books: Book[] = [];
  collection: any={};
  isCart = false;
  subscriptions: Subscription[] = [];
  billingForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(
    private mycollectionService: CollectionService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.mycollectionService.mycollection$.subscribe((res:any) => {
        if (Array.isArray(res)) {
          this.isCart = true;
          res.forEach((book) => {
            this.books.push(book);
          });
        } else {
          this.isCart = false;
          this.books.push(res);
        }
      })
    );
  }
  onSubmit(name: string, email: string, phone: number, address: string): void {
    this.books.forEach((book) => {
      this.collection = {
        title: book?.title || '',
        imgLink: book?.imageLink || '',
        description: book?.description || '',
        authors: book?.authors || '',
        name: name || '',
        email: email || '',
        phone: phone || 0,
        address: address || '',
      };
      this.mycollectionService.addCollection(this.collection);
      if (this.isCart) {
        this.cartService.clearItems();
      }
      this.snackBar.openFromComponent(SnakBarComponent, {
        duration: 2000,
        panelClass: 'blue-snackbar',
      });
      return true;
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
}
