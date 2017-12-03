import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Review } from '../classes/review';
import { environment } from '../../environments/environment';

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }
  
 getAllReviews(): Observable<Object> {
    return this.http.get(environment.api + environment.routes.getBooks);
  }

}