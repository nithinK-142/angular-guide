import { Injectable } from '@angular/core';
import { MasterService } from './master/master.service';

@Injectable({
  providedIn: 'root',
})
export class ApiUsersService {
  constructor(private masterService: MasterService) {}

  private API_URL = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return this.masterService.get(this.API_URL);
  }
}
