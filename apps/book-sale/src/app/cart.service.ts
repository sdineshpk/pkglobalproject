import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Book[] = [];

  getCartItems(): Book[] {
    return this.cartItems;
  }
  addCartItem(book: Book): void {
    this.cartItems.push(book);
  }
  deleteItem(id: string): void {
    const index = this.cartItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
  clearItems(): void {
    this.cartItems = [];
  }
}
