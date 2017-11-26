import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('burger') burger: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  toggleBurger() {
    this.burger.nativeElement.classList.toggle('is-active');
    this.menu.nativeElement.classList.toggle('is-active');
  }

  disableBurger() {
    this.burger.nativeElement.classList.remove('is-active');
    this.menu.nativeElement.classList.remove('is-active');
  }

  logout() {
    this.authService.logout().subscribe(
      res => this.router.navigate([''])
    );
  }

}
