import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  http = inject(HttpClient);
  private API_URL = 'http://localhost:3000/api';

  login(data: any) {
    return this.http.post(`${this.API_URL}/login`, data);
  }
  register(data: any) {
    return this.http.post(`${this.API_URL}/register`, data);
  }
}
