import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './home-page/search-page/search-page.component';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      { path: 'search', component: SearchPageComponent },
      {
        path: 'books',
        component: BookDetailsComponent,
      },
      {
        path: 'billingpage',
        component: BillingDetailsComponent,
      },
      {
        path: 'cart',
        component: CartItemsComponent,
      },
      {
        path: 'collection',
        component: CollectionDetailsComponent,
      },
      { path: '', redirectTo: '/search', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
