import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  router = inject(Router);
  username: any = '';

  constructor(private userAuthService: UserAuthService) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('loggedinUser');
  }

  logout() {
    localStorage.removeItem('loggedinUser');
    this.userAuthService.isLoggedin = false;
    this.router.navigateByUrl('login');
  }
}
