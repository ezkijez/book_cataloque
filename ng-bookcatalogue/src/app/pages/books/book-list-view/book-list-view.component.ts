import { Component, OnInit } from '@angular/core';
import { Book } from '../../../classes/book';
import { BookService } from '../../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list-view',
  templateUrl: './book-list-view.component.html',
  styleUrls: ['./book-list-view.component.css']
})
export class BookListViewComponent implements OnInit {

  private books: Book[];
  private filteredBooks: Book[];
  private _currentBook: Book;

  private _currentPage: Book[];
  private _page = 1;
  private pageSize = 5;
  private _pageCount: number;
  private _pageNumbers: number[];

  constructor(private bookService: BookService, private router: Router) { }
  searchTerm: string;

    ngOnInit() {
      this.bookService.getAllBooks().subscribe(
        (books) => {
          this.books = <Book[]>books;
          this.filteredBooks = this.books;
          this.refresh();
        });
    }

    selectBook(a) {
      this._currentBook = a;
    }

    searchBook(searchTerm) {
      this.filteredBooks = this.books.filter(
        book => book.title.toUpperCase().includes(searchTerm.toUpperCase())
      );
      this.refresh();
    }

    resetSearch() {
      this.searchTerm = '';
      this.searchBook(this.searchTerm);
    }

    checkRandomBook() {
      const randomId = Math.floor(Math.random() * this.books.length);
      this._currentBook = this.books[randomId];
    }

    nextPage() {
      if (this.page < this.pageCount) {
        this.page++;
      }
      this.refresh();
    }

    previousPage() {
      if (this.page > 1) {
        this.page--;
      }
      this.refresh();
    }

    goToPage(page: number) {
      if (page > 0 && page <= this.pageCount) {
        this.page = page;
      }
      this.refresh();
    }

    refresh() {
      this.pageCount = Math.ceil(this.filteredBooks.length / this.pageSize);
      this.refreshPage();
      this.refreshPageNumbers();
    }

    refreshPageNumbers() {
      this._pageNumbers = [];
      if (this.pageCount < 5) {
        for (let i = 2; i < this.pageCount; i++) {
          this._pageNumbers.push(i);
        }
      } else {
        if (this.page < 3) { // at the beginning
          this._pageNumbers.push(2, 3);
        } else if (this.page > this.pageCount - 2) { // at the end
          this._pageNumbers.push(this.pageCount - 2, this.pageCount - 1);
        } else { // somewhere in the middle
          this._pageNumbers.push(this.page - 1, this.page, this.page + 1);
        }
      }
    }

  refreshPage() {
    const begin = (this.page - 1) * this.pageSize;
    const end = this.page * this.pageSize;
    this._currentPage = this.filteredBooks.slice(begin, end);
  }

  get pageCount(): number {
    return this._pageCount;
  }

  set pageCount(value: number) {
    this._pageCount = value;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get currentBook(): Book {
    return this._currentBook;
  }

  get pageNumbers(): number[] {
    return this._pageNumbers;
  }

  get currentPage(): Book[] {
    return this._currentPage;
  }
}
