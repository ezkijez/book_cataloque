import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../classes/book';
import { environment } from '../../environments/environment';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Object> {
    return this.http.get(environment.api + environment.routes.getBooks) as Observable<Book[]>;
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get(`${environment.api}${environment.routes.getBookById}${id}`) as Observable<Book>;
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.get(`${environment.api}${environment.routers.deleteBook}${id}`) as Observable<book>;
}
