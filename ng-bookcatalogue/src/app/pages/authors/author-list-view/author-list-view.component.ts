import { Component, OnInit } from '@angular/core';
import { Author } from '../../../classes/author';
import { AuthorService } from '../../../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-list-view',
  templateUrl: './author-list-view.component.html',
  styleUrls: ['./author-list-view.component.css']
})
export class AuthorListViewComponent implements OnInit {
  searchTerm: string;

  private authors: Author[];
  private filteredAuthors: Author[];
  private currentAuthor: Author;

  private currentPage: Author[];
  private _page = 1;
  private pageSize = 2;
  private _pageCount: number;
  private pageNumbers: number[];

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit() {
    this.authorService.getAllAuthors().subscribe(
      (authors) => {
        this.authors = authors;
        this.filteredAuthors = this.authors;
        this.refresh();
      });
  }

  selectAuthor(a) {
    this.currentAuthor = a;
  }

  searchAuthor(searchTerm) {
    this.filteredAuthors = this.authors.filter(
      author => author.name.toUpperCase().includes(searchTerm.toUpperCase())
    );
    this.refresh();
  }

  resetSearch() {
    this.searchTerm = '';
    this.searchAuthor(this.searchTerm);
  }

  checkRandomAuthor() {
    const randomId = Math.floor(Math.random() * this.authors.length);
    this.currentAuthor = this.authors[randomId];
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
    this._pageCount = Math.ceil(this.filteredAuthors.length / this.pageSize);
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
    this.currentPage = this.filteredAuthors.slice(begin, end);
  }

  get page(): number {
    return this._page;
  }

  get pageCount(): number {
    return this._pageCount;
  }
}
