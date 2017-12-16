import { NgModule } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { HomeComponent } from '../../pages/home/home.component';
import { AuthorListViewComponent } from '../../pages/authors/author-list-view/author-list-view.component';
import { RegistrationComponent } from '../../pages/registration/registration.component';
import { BookGridViewComponent } from '../../pages/books/book-grid-view/book-grid-view.component';
import { BookItemViewComponent } from '../../pages/books/book-item-view/book-item-view.component';
import { AuthorFormComponent } from '../../pages/authors/author-form/author-form.component';
import { BookFormComponent } from '../../pages/books/book-form/book-form.component';
import { RouteGuardService } from '../../services/route-guard.service';
import { Role } from '../../classes/role';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [RouteGuardService],
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'authors', component: AuthorListViewComponent },
      { path: 'author/new', component: AuthorFormComponent, data: { roles: [Role.USER, Role.ADMIN] }  },
      { path: 'author/edit/:id', component: AuthorFormComponent, data: { roles: [Role.ADMIN] }  },
      { path: 'book/:id', component: BookItemViewComponent },
      { path: 'books', component: BookGridViewComponent },
      { path: 'books/edit/:id', component: BookFormComponent, data: { roles: [Role.ADMIN] } },
      { path: 'books/new', component: BookFormComponent, data: { roles: [Role.USER, Role.ADMIN] } }
    ]
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
