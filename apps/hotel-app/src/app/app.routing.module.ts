import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomBookingComponent } from './room-booking/room-booking.component';

const routes: Routes = [
  {
    path: 'roombooking',
    component: RoomBookingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
