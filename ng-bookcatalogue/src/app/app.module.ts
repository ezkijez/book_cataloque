import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from './modules/router/router.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationService } from './services/authentication.service';
import { HomeComponent } from './pages/home/home.component';
import { AuthorListViewComponent } from './pages/authors/author-list-view/author-list-view.component';
import { AuthorService } from './services/author.service';
import { AuthorItemComponent } from './components/author-item/author-item.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListViewComponent } from './pages/books/book-list-view/book-list-view.component';
import { BookService } from './services/book.service';
import { RegistrationComponent } from './pages/registration/registration.component';
import { BookGridViewComponent } from './pages/books/book-grid-view/book-grid-view.component';
import { BookItemViewComponent } from './pages/books/book-item-view/book-item-view.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AuthorFormComponent } from './pages/authors/author-form/author-form.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewService } from './services/review.service';
import { BookFormComponent } from './pages/books/book-form/book-form.component';
import { RouteGuardService } from './services/route-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    HomeComponent,
    AuthorListViewComponent,
    AuthorItemComponent,
    BookItemComponent,
    BookListViewComponent,
    BookGridViewComponent,
    BookItemViewComponent,
    LoaderComponent,
    AuthorFormComponent,
    ReviewItemComponent,
    ReviewListComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService, RouteGuardService, AuthorService, BookService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
