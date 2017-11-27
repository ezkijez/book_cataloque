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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    AuthorListViewComponent,
    AuthorItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
