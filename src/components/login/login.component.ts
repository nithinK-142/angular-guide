import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userObj: any = { email: '', password: '' };
  router = inject(Router);

  constructor(private userAuthService: UserAuthService) {}

  login() {
    if (this.userObj.email.trim() == '' && this.userObj.password.trim() == '') {
      alert('Fill all fields');
      return;
    }
    this.userAuthService.login(this.userObj).subscribe({
      next: (res: any) => {
        alert('Login successful');
        this.router.navigateByUrl('home');
        localStorage.setItem('loggedinUser', res.uusername);
      },
      error: (err: any) => {
        console.error('Login error:', err);
        if (err.status === 401) {
          alert(err.error.message);
        } else {
          alert('An error occurred during login. Please try again later.');
        }
      },
    });
  }
}
