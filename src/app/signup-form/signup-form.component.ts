import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { PasswordsValidators } from './password.validators';

@Component({
  selector: "signup-form",
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  // form = new FormGroup({
  //   oldPassword: new FormControl(
  //     '',
  //     Validators.required,
  //     PasswordsValidators.oldPasswordIsIconrrect
  //   ),
  //   newPassword: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', [
  //     Validators.required,
  //     PasswordsValidators.confirmPassword,
  //   ]),
  // });

  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: [
        '',
        Validators.required,
        PasswordsValidators.oldPasswordIsIconrrect,
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: PasswordsValidators.confirmPasswordShouldMatch
    });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  login() {
    this.form.setErrors({ invalidPasswords: true });
  }
}
