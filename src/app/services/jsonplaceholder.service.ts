import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class JsonplaceholderService {

  private url = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  checkUsers(email: string) {
    return this.http.get(this.url).pipe(
      map(users => (user => user.email === email)),
      map(users => !users.length)
      );
  }
}
