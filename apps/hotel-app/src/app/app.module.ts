import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ModalModule } from './_modal/modal.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './header/header.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { MyBookingComponent } from './my-booking/my-booking.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RoomBookingComponent, MyBookingComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
