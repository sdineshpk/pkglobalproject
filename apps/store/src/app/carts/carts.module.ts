import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { MaterialModule } from '../material/material.module';
import { CartsRoutingModule } from './carts-routing.module';

@NgModule({
  declarations: [CartItemComponent],
  imports: [CommonModule, MaterialModule, CartsRoutingModule],
  exports: [CartItemComponent],
})
export class CartsModule {}
