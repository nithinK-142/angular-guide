import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  router = inject(Router);
  username: any = '';

  ngOnInit(): void {
    this.username = localStorage.getItem('loggedinUser');
    if (
      this.username == '' ||
      this.username == undefined ||
      this.username == null
    ) {
      this.router.navigateByUrl('login');
    }
  }

  logout() {
    localStorage.removeItem('loggedinUser');
    this.router.navigateByUrl('login');
  }
}
