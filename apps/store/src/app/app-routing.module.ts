import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  {
    path: 'cart',
    loadChildren: () =>
      import('./carts/carts.module').then((m) => m.CartsModule),
  },
  {
    path: 'mycollection',
    loadChildren: () =>
      import('./mycollections/mycollections.module').then(
        (m) => m.MycollectionsModule
      ),
  },
  { path: 'bookdetails', component: BookDetailsComponent },
  { path: 'billingpage', component: BillingPageComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [SearchComponent, BillingPageComponent];
