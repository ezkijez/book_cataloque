import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Author } from '../classes/author';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAllAuthors(): Observable<Author[]> {
    return this.http.get(environment.api + environment.routes.getAuthors) as Observable<Author[]>;
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get(`${environment.api}${environment.routes.getAuthorById}${id}`) as Observable<Author>;
  }

  updateAuthor(author: Author): Observable<Author> {
    return this.http.put(environment.api + environment.routes.updateAuthor, author) as Observable<Author>;
  }

  addAuthor(author: Author): Observable<Author> {
    return this.http.post(environment.api + environment.routes.addAuthor, author) as Observable<Author>;
  }

  deleteAuthor(id: number): Observable<Author[]> {
    return this.http.delete(environment.api + environment.routes.deleteAuthor + id) as Observable<Author[]>;
  }
}
