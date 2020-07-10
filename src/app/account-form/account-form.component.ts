import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DuplicateEmailValidator } from './duplicate-email.validator';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
})
export class AccountFormComponent implements OnInit {
  accountForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-z0-9_.]+@[a-zA-Z]+.[a-zA-Z]+'),
      DuplicateEmailValidator.checkDuplicateEmail(this.service)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$'),
    ]),
  });

  constructor(private service: JsonplaceholderService) {}


  get email() {
    return this.accountForm.get('email');
  }

  get password() {
    return this.accountForm.get('password');
  }

  signup(){
    console.log(this.accountForm.value);
    alert('The form was submitted');
    this.accountForm.reset();
}

  ngOnInit() {}
}
