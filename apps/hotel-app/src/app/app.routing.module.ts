import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';

const routes: Routes = [
  {
    path: 'roombooking',
    component: RoomBookingComponent,
  },
  {
    path: 'myBooking',
    component: MyBookingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
