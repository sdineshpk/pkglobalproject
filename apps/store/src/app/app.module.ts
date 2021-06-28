import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BillingPageComponent } from './billing-page/billing-page.component';
import { SnakBarComponent } from './snak-bar/snak-bar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromApp from './../app/ngrx-store/app.reducer';
import { CartEffects } from './ngrx-store/cart.effects';
import { BooksFacadeService } from './../app/ngrx-store/books-facade.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BookDetailsComponent,
    BillingPageComponent,
    SnakBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([CartEffects]),
  ],
  providers: [BooksFacadeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
