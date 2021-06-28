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
import { CollectionModule } from '../collection/collection.model';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.scss']
})
export class BillingDetailsComponent implements OnInit, OnDestroy {
  isValid = true;
  books: Book[] = [];
  collection: CollectionModule={
    title: "",
    imgLink: "",
    description: "",
    authors: "",  
    name: "",
    email: "",
    phone: 0,
    address: "",
  };
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
      this.mycollectionService.mycollection$.subscribe((res:Book[]) => {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit(billingForm:any): void {
    //name: string, email: string, phone: number, address: string
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
