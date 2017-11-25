import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../classes/user';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {
  private user: User;
  private loggedIn = false;

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  login(user: User) {
    return this.http.post(environment.api + environment.routes.login, user, httpOptions)
      .pipe(
        tap((resUser: User) => {
          this.user = resUser;
          this.loggedIn = true;
        })
      );
  }

}
