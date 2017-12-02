import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../classes/book';
import { Author } from '../../../classes/author';

@Component({
  selector: 'app-book-item-view',
  templateUrl: './book-item-view.component.html',
  styleUrls: ['./book-item-view.component.css']
})
export class BookItemViewComponent implements OnInit {
  private _book: Book;
  private _authorNames: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
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
