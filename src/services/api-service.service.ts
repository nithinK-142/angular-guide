import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  private API_URL = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return this.http.get(this.API_URL);
  }
}
