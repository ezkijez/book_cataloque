import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ReviewService } from '../../services/review.service';
import { Review } from '../../classes/review';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit, OnChanges {
  @Input()
  private bookId: number;

  @Input()
  private refresh: number;

  private _reviews: Review[];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviewsOfBook(this.bookId).subscribe(
      reviews => this.reviews = reviews,
      err => console.log(err)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.reviewService.getReviewsOfBook(this.bookId).subscribe(
      reviews => this.reviews = reviews,
      err => console.log(err)
    );
  }

  get reviews(): Review[] {
    return this._reviews;
  }

  set reviews(value: Review[]) {
    this._reviews = value;
  }
}
