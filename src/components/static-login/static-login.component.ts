import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-static-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './static-login.component.html',
})
export class StaticLoginComponent {
  userObj = { username: 'admin', password: '1234' };
  router = inject(Router);

  login() {
    console.log(this.userObj);
    if (this.userObj.password == '1234') {
      alert('login successfull');
      this.router.navigateByUrl('home');
      localStorage.setItem('loggedinUser', this.userObj.username);
    } else {
      alert('wrong credentials');
    }
  }
}
