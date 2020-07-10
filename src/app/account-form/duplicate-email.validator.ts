import { AbstractControl, ValidationErrors } from '@angular/forms';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';
import { map } from 'rxjs/operators';

export class DuplicateEmailValidator {

  static checkDuplicateEmail(service: JsonplaceholderService) {
    return (control: AbstractControl) => {
      return service.checkUsers(control.value).pipe(
        map((res) => {
          return res ? null : { duplicateEmail: true };
        })
      );
    };
  }
}
