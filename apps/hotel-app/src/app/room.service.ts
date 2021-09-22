import { Injectable } from '@angular/core';

export interface foodService {
    name: string,
    value: string
  }
  
  export  interface guests {
    firstName: string,
    lastName: string,
    age:string,
    gender:string,
    email:string,
    phone:string,
    address:string
  }

  export interface bookings {
    room:string,
    checkIn:Date,
    checkOut:Date,
    guestList:Array<guests>
  }

  

@Injectable({
  providedIn: 'root',
})
  export class RoomService {

    bookList:Array<bookings>=[];

    addBookList(bookings:bookings){
        this.bookList.push(bookings);
    }

    getBookList(){
        return this.bookList;
    }
  }