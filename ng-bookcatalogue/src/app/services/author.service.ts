import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Author } from '../classes/author';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAllAuthors(): Observable<Author[]> {
    return this.http.get(environment.api + environment.routes.getAuthors);
  }

}
