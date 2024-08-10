import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { constants } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(
      `${constants.API_URL}${constants.USER_METHODS.GET_USERS}`
    );
  }

  createUser(user: any): Observable<any> {
    console.log('creating user frontend');
    return this.http.post<any>(
      `${constants.API_URL}${constants.USER_METHODS.CREATE_USER}`,
      user
    );
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(
      `${constants.API_URL}${constants.USER_METHODS.UPDATE_USER}/${user.id}`,
      user
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(
      `${constants.API_URL}${constants.USER_METHODS.DELETE_USER}/${id}`
    );
  }
}
