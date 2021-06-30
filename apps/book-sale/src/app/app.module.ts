import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterailAppModule } from './materail/materail.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './home-page/search-page/search-page.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { SnakBarComponent } from './snak-bar/snak-bar.component';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    BookDetailsComponent,
    BillingDetailsComponent,
    SnakBarComponent,
    CollectionDetailsComponent,
    CartItemsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterailAppModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
