import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { HomeComponent } from '../../pages/home/home.component';
import { AuthorListViewComponent } from '../../pages/authors/author-list-view/author-list-view.component';
import { BookListViewComponent } from '../../pages/books/book-list-view/book-list-view.component';
import { RegistrationComponent } from '../../pages/registration/registration.component';
import { BookGridViewComponent } from '../../pages/books/book-grid-view/book-grid-view.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegistrationComponent
  },
  {
    path: 'authors', component: AuthorListViewComponent
  },
  {
    path: 'books', component: BookGridViewComponent
  }
];

@NgModule({
  imports: [
    NgRouterModule.forRoot(routes)
  ],
  exports: [
    NgRouterModule
  ],
  declarations: []
})
export class RouterModule { }
