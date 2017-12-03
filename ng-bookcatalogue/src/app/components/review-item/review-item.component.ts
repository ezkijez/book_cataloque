import { Component, OnInit } from '@angular/core';
import { Review } from '../../classes/review';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

  review: Review;

  constructor() { }

  ngOnInit() {
  }

}
