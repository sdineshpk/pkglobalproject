import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'pkglobal-app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent implements OnInit {
  cartItems: Book[] = [];
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }
  deleteItem(id: string): void {
    this.cartService.deleteItem(id);
  }
  proceedToCheckout(): void {
    this.router.navigate(['/home/billingpage']);
  }
}
