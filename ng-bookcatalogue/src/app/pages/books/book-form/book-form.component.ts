import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../classes/book';
import { Author } from '../../../classes/author';
import { AuthorService } from '../../../services/author.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  private _book: Book = new Book();
  private _edit: boolean;
  error: boolean;
  private _authors: Author[];

  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    pDate: new FormControl('', [Validators.required, Validators.min(1000), Validators.max(2020)])
  });

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private authService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.authorService.getAllAuthors().subscribe(
      authors => this._authors = authors as Author[]
    );
    const id = +this.route.snapshot.params['id'];
    if (id && this.authService.isAdmin()) {
      this.edit = true;
      this.bookService.getBookById(id).subscribe(
        book => {
          this.book = book;
        });
    } else {
      this.book.authors = [];
      this.book.authors.push(new Author());
    }
  }

  submit(book: Book) {
    book.publicationDate = new Date(+book.publicationDate, 0).toISOString();
    if (this.edit) {
      this.bookService.updateBook(book).subscribe(
        resBook => this.router.navigate([`/book/${resBook.id}`]),
        () => this.error = true
      );
    } else {
      this.bookService.addBook(book).subscribe(
        () => this.router.navigate(['/books']),
        () => this.error = true
      );
    }
  }

  get edit(): boolean {
    return this._edit;
  }

  set edit(value: boolean) {
    this._edit = value;
  }

  get title(): AbstractControl {
    return this.bookForm.get('title');
  }

  get author(): AbstractControl {
    return this.bookForm.get('author');
  }

  get genre(): AbstractControl {
    return this.bookForm.get('genre');
  }
  get pDate(): AbstractControl {
    return this.bookForm.get('pDate');
  }

  get book(): Book {
    return this._book;
  }

  set book(value: Book) {
    this._book = value;
  }

  get authors(): Author[] {
    return this._authors;
  }

  set authors(value: Author[]) {
    this._authors = value;
  }
}
