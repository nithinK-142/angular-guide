import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-api-call',
  standalone: true,
  imports: [JsonPipe, CommonModule],
  templateUrl: './api-call.component.html',
})
export class ApiCallComponent {
  users: any = [];

  // new way - injection
  http = inject(HttpClient);

  // old way to create http instance - dependency injection
  // constructor(private http: HttpClient){}

  // this gets users when component is loaded
  // constructor() {
  //   this.getUsers();
  // }

  getUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => (this.users = res));
  }
}
