import { Component, OnInit } from '@angular/core';

interface bookings {
  firstName: string,
  lastName: string,
  room:string,
  checkIn:Date,
  checkOut:Date,
  guestList:number
}

@Component({
  selector: 'pkglobal-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent  {

  bookList:Array<bookings>=[];
}
