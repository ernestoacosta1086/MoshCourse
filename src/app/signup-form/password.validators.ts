import { AbstractControl, ValidationErrors } from '@angular/forms';
import { resolve } from 'url';

export class PasswordsValidators {
  static oldPasswordIsIconrrect(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      if (control.value !== '1234') {
        resolve({ oldPasswordIconrrect: true });
      } else {
        resolve(null);
      }
    });
  }

  static confirmPasswordShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    if (newPassword.value !== confirmPassword.value)
      return { confirmPasswordShouldMatch: true };
    return null;
  }
}
