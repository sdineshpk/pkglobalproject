import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl} from "@angular/forms"
import { ModalService } from '../_modal/modal.service';
import { Router } from '@angular/router';

interface foodService {
  name: string,
  value: string
}

interface guests {
  firstName: string,
  lastName: string,
  age:string,
  gender:string,
  email:string,
  phone:string,
  address:string
}

@Component({
  selector: 'pkglobal-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent {

  options="payment";
  guestList:Array<guests>=[];
  Data: Array<foodService> = [
    { name: 'Breakfast', value: 'breakfast' },
    { name: 'Lunch', value: 'lunch' },
    { name: 'Dinner', value: 'Dinner' }
  ];

  stayFormGroup: FormGroup=this.fb.group({
    checkDate: [null, Validators.required ],
    checkOut: [null, Validators.required ],
    roomType:[null, Validators.required],
    person:[null, Validators.required],
    checkArray: this.fb.array([], [Validators.required]),
    pickup:[null, Validators.required],
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
cardFormGroup: FormGroup=this.fb.group({
  cardHolderName: [null, Validators.required ],
  cardNumber: [null, Validators.required ],
  expirationDate: [null, Validators.required ],
  CVV: [null, Validators.required ]
});
paymentOptions='card';
checkApprove=false;

  constructor(
      private fb: FormBuilder,private modalService: ModalService,private router: Router )
  { }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  onCheckboxChange(e:any) {
    const checkArray: FormArray = this.stayFormGroup.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  addGuest(){
    this.guestList.push(this.guestFormGroup.value);
    this.closeModal('custom-modal-1');
  }

  backToPrev(){
    switch (this.options) {
      case 'guests':
        this.options='yourStay';
        break;
      case 'payment':
        this.options='guests';
        break;

      default:
        break;
    }    
  }

  goToNext(){
    switch (this.options) {
      case 'guests':
        this.options='payment';
        break;
      case 'yourStay':
        this.options='guests';
        break;

      default:
        break;
    }
  }

  moveToBooking(){
    this.closeModal('custom-modal-2');
    this.router.navigate(['/myBooking']);
  }


}
