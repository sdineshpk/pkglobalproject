import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from "@angular/forms"
import { ModalService } from '../_modal/modal.service';

@Component({
  selector: 'pkglobal-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent {

  options="yourStay";

  stayFormGroup: FormGroup=this.fb.group({
    checkDate: [null, Validators.required ],
    checkOut: [null, Validators.required ]
 });
 guestFormGroup: FormGroup=this.fb.group({
  firstName: [null, Validators.required ],
  lastName: [null, Validators.required ],
  gender: ["male", Validators.required ],
  phone: [null, Validators.required ],
  email: [null, Validators.required ],
  address: [null, Validators.required ],
  age: [null, Validators.required ],
});

  constructor(
      private fb: FormBuilder,private modalService: ModalService )
  { }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }


}
