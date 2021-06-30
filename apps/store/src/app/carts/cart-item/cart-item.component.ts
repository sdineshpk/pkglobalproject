import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../book.model';
import { BooksFacadeService } from '../../../app/ngrx-store/books-facade.service';

@Component({
  selector: 'pkglobal-app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  cartItems$: Book[] = [];
  constructor(
    private router: Router,
    private booksFacadeService: BooksFacadeService
  ) {}

  ngOnInit(): void {
    this.booksFacadeService.getAllCartItems$.subscribe((res) => {
      this.cartItems$ = res;
    });
  }
  deleteItem(id: string): void {
    this.booksFacadeService.deleteItem(id);
  }
  proceedToCheckout(): void {
    this.booksFacadeService.updateCart(true);
    this.router.navigate(['/billingpage']);
  }
}
