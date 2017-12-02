import { Component, OnInit } from '@angular/core';
import { Book } from '../../../classes/book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-book-grid-view',
  templateUrl: './book-grid-view.component.html',
  styleUrls: ['./book-grid-view.component.css']
})
export class BookGridViewComponent implements OnInit {

  private books: Book[];
  private _filteredBooks: Book[];
  searchTerm: string;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(
      (books) => {
        this.books = <Book[]> books;
        this.filteredBooks = this.books;
      });
  }

  searchBook(searchTerm) {
    this.filteredBooks = this.books.filter(
      book => book.title.toUpperCase().includes(searchTerm.toUpperCase())
    );
  }

  resetSearch() {
    this.searchTerm = '';
    this.searchBook(this.searchTerm);
  }

  get filteredBooks(): Book[] {
    return this._filteredBooks;
  }

  set filteredBooks(value: Book[]) {
    this._filteredBooks = value;
  }
}
