import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Author } from '../classes/author';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAllAuthors(): Observable<Object> {
    return this.http.get(environment.api + environment.routes.getAuthors);
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get(`${environment.api}${environment.routes.getAuthorById}${id}`);
  }

  updateAuthor(author: Author): Observable<Author> {
    return this.http.put(environment.api + environment.routes.updateAuthor, author);
  }

  addAuthor(author: Author): Observable<Author> {
    return this.http.post(environment.api + environment.routes.addAuthor, author);
  }

}
