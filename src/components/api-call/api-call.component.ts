import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-api-call',
  standalone: true,
  imports: [JsonPipe, CommonModule],
  templateUrl: './api-call.component.html',
})
export class ApiCallComponent {
  users: any = [];

  // new way - injection
  // http = inject(HttpClient);

  // old way to create http instance - dependency injection
  // constructor(private http: HttpClient){}

  // this gets users when component is loaded
  // constructor() {
  //   this.getUsers();
  // }

  constructor(private apiService: ApiServiceService) {}

  getUsers() {
    this.apiService.getUsers().subscribe((res: any) => (this.users = res));
  }
}
