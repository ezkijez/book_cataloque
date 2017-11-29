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
  private currentBook: Book;

  private currentPage: Book[];
  private _page = 1;
  private pageSize = 2;
  private _pageCount: number;
  private pageNumbers: number[];

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
      this.currentBook = a;
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
      this.currentBook = this.books[randomId];
    }
  
    nextPage() {
      if (this._page < this._pageCount) {
        this._page++;
      }
      this.refresh();
    }
  
    previousPage() {
      if (this._page > 1) {
        this._page--;
      }
      this.refresh();
    }
  
    goToPage(page: number) {
      if (page > 0 && page <= this._pageCount) {
        this._page = page;
      }
      this.refresh();
    }
  
    refresh() {
      this._pageCount = Math.ceil(this.filteredBooks.length / this.pageSize);
      this.refreshPage();
      this.refreshPageNumbers();
    }
  
    refreshPageNumbers() {
      this.pageNumbers = [];
      if (this.pageCount < 5) {
        for (let i = 2; i < this.pageCount; i++) {
          this.pageNumbers.push(i);
        }
      } else {
        if (this.page < 3) { // at the beginning
          this.pageNumbers.push(2, 3);
        } else if (this.page > this.pageCount - 2) { // at the end
          this.pageNumbers.push(this.pageCount - 2, this.pageCount - 1);
        } else { // somewhere in the middle
          this.pageNumbers.push(this.page - 1, this.page, this.page + 1);
        }
      }
    }
  
    refreshPage() {
      const begin = (this._page - 1) * this.pageSize;
      const end = this._page * this.pageSize;
      this.currentPage = this.filteredBooks.slice(begin, end);
    }
  
    get page(): number {
      return this._page;
    }
  
    get pageCount(): number {
      return this._pageCount;
    }
  }
  