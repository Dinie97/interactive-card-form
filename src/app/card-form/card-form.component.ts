import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent {
  cardForm: FormGroup;

  constructor() {
    this.cardForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      CardNumber: new FormControl('', Validators.required),
      MMDate: new FormControl('', Validators.required),
      YYDate: new FormControl('', Validators.required),
      CVC: new FormControl('', Validators.required),
    });
  }

  splitCardNumber(event: any) {
    const value = this.cardForm.get('CardNumber')?.value;
    const splitValue = value
      .replace(/\D+/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
    this.cardForm.get('CardNumber')?.setValue(splitValue);
  }

  numsOnly(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  Submit() {
    console.log(this.cardForm.value);
  }
}
