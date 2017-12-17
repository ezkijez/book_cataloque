import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../../../services/author.service';
import { Author } from '../../../classes/author';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getPath } from '../../../../../e2e/getpath';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
  private _author: Author = new Author();
  private edit: boolean;
  error: boolean;

  authorForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required])
  });

  constructor(private authorService: AuthorService,
              private authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    if (id && this.authenticationService.isAdmin()) {
      this.edit = true;
      this.authorService.getAuthorById(id).subscribe(
        author => this.author = author
      );
    }
    // console.log(getPath());
  }

  submit(author: Author) {
    if (this.edit) {
      this.authorService.updateAuthor(this.author).subscribe(
        () => this.router.navigate(['/authors']),
        () => this.error = true
      );
    } else {
      this.authorService.addAuthor(author).subscribe(
        () => this.router.navigate(['/authors']),
        () => this.error = true
      );
    }
  }

  get name(): AbstractControl {
    return this.authorForm.get('name');
  }

  get nationality(): AbstractControl {
    return this.authorForm.get('nationality');
  }

  get bio(): AbstractControl {
    return this.authorForm.get('bio');
  }

  get author(): Author {
    return this._author;
  }

  set author(value: Author) {
    this._author = value;
  }
}
