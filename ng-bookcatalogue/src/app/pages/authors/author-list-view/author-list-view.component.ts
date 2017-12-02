import { Component, OnInit } from '@angular/core';
import { Author } from '../../../classes/author';
import { AuthorService } from '../../../services/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-author-list-view',
  templateUrl: './author-list-view.component.html',
  styleUrls: ['./author-list-view.component.css']
})
export class AuthorListViewComponent implements OnInit {
  searchTerm: string;

  private authors: Author[];
  private filteredAuthors: Author[];
  private _currentAuthor: Author;

  private _currentPage: Author[];
  private _page = 1;
  private pageSize = 5;
  private _pageCount: number;
  private _pageNumbers: number[];

  constructor(private authorService: AuthorService,
              private _authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.authorService.getAllAuthors().subscribe(
      (authors) => {
        this.authors = <Author[]> authors;
        this.filteredAuthors = this.authors;
        this.refresh();
        this.route.queryParams.subscribe(() => {
          this.setAuthorFromQuery();
        });
      });
  }

  setAuthorFromQuery() {
    const id = +this.route.snapshot.queryParams['id'];
    if (id) {
      this.currentAuthor = this.authors.find(author => author.id === id);
    }
  }

  selectAuthor(a) {
    this.currentAuthor = a;
    this.router.navigate(['/authors'], { queryParams: { id: a.id } });
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
    this.selectAuthor(this.authors[randomId]);
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
    this.pageCount = Math.ceil(this.filteredAuthors.length / this.pageSize);
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
    const begin = (this.page - 1) * this.pageSize;
    const end = this.page * this.pageSize;
    this.currentPage = this.filteredAuthors.slice(begin, end);
  }

  get pageCount(): number {
    return this._pageCount;
  }

  set pageCount(value: number) {
    this._pageCount = value;
  }

  get pageNumbers(): number[] {
    return this._pageNumbers;
  }

  set pageNumbers(value: number[]) {
    this._pageNumbers = value;
  }

  get currentAuthor(): Author {
    return this._currentAuthor;
  }

  set currentAuthor(value: Author) {
    this._currentAuthor = value;
  }

  get currentPage(): Author[] {
    return this._currentPage;
  }

  set currentPage(value: Author[]) {
    this._currentPage = value;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }


  get authenticationService(): AuthenticationService {
    return this._authenticationService;
  }
}
