import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ButtonnComponent } from '../../../../reusable-components/buttonn/buttonn.component';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../../../reusable-components/spinner/spinner.component';

@Component({
  selector: 'app-ngcontainer',
  standalone: true,
  imports: [ButtonnComponent, CommonModule, SpinnerComponent],
  templateUrl: './ngcontainer.component.html',
})
export class NgcontainerComponent {
  users: any[] = [];
  http = inject(HttpClient);
  isCallingApi = false;

  getUsers() {
    this.isCallingApi = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.users = res;
        console.log(this.users);
        this.isCallingApi = false;
      });
  }
}
