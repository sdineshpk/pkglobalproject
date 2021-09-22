import { Component, OnInit } from '@angular/core';
import { bookings } from '../room.service';

@Component({
  selector: 'pkglobal-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent  {

  bookList:Array<bookings>=[];
}
