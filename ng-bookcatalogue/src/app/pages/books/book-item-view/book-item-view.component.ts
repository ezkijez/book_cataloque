import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../classes/book';
import { Author } from '../../../classes/author';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../../../services/review.service';
import { Review } from '../../../classes/review';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-book-item-view',
  templateUrl: './book-item-view.component.html',
  styleUrls: ['./book-item-view.component.css']
})
export class BookItemViewComponent implements OnInit {
  private _book: Book;
  private _authorNames: string;

  reviewForm: FormGroup = new FormGroup({
    rating: new FormControl('1'),
    review: new FormControl('', [Validators.required, Validators.minLength(40)])
  });
  refreshReviews = 0;
  done = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private reviewService: ReviewService,
    private _authService: AuthenticationService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      (book) => {
        this.book = book as Book;
        this.buildAuthorNames(this.book.authors);
      } );
  }

  buildAuthorNames(authorArray: Author[]) {
    this.authorNames = authorArray[0].name;
    for (let i = 1; i < authorArray.length; ++i) {
      this.authorNames += `, ${authorArray[i].name}`;
    }
  }

  removeBook(bookId: number) {
    this.bookService.deleteBook(bookId).subscribe(
      () => {
        this.router.navigate(['/books']);
      },
      err => console.log(err)
    );
  }

  submitReview() {
    this.reviewService.addReview(new Review(
      this.authService.user,
      new Book(this.book.id),
      this.review.value,
      this.rating.value)
    ).subscribe(
      () => {
        this.done = true;
        this.reviewForm.reset();
        this.refreshReviews++;
      },
          err => console.log(err)
      );
  }

  get authService(): AuthenticationService {
    return this._authService;
  }

  get rating(): AbstractControl {
    return this.reviewForm.get('rating');
  }

  get review(): AbstractControl {
    return this.reviewForm.get('review');
  }

  get book(): Book {
    return this._book;
  }

  set book(value: Book) {
    this._book = value;
  }

  get authorNames(): string {
    return this._authorNames;
  }

  set authorNames(value: string) {
    this._authorNames = value;
  }
}
