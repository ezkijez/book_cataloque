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
  private filteredBooks: Book[];
  private rowSize = 3;
  private bookGrid = [];
  searchTerm: string;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(
      (books) => {
        this.books = <Book[]> books;
        this.filteredBooks = this.books;
        this.refreshGrid();
      });
  }

  searchBook(searchTerm) {
    this.filteredBooks = this.books.filter(
      book => book.title.toUpperCase().includes(searchTerm.toUpperCase())
    );
  }

  refreshGrid() {
    this.bookGrid = [];
    const rows = Math.ceil(this.filteredBooks.length / this.rowSize);
    for (let i = 0; i < rows; ++i) {
      this.bookGrid.push(this.filteredBooks.slice(i * this.rowSize, (i + 1) * this.rowSize));
    }
    console.log(this.bookGrid);
  }

}
