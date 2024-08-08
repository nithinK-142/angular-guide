import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  userObj: any = { email: '', username: '', password: '' };
  router = inject(Router);

  constructor(private userAuthService: UserAuthService) {}

  register() {
    if (
      this.userObj.email.trim() == '' &&
      this.userObj.username.trim() == '' &&
      this.userObj.password.trim() == ''
    ) {
      alert('Fill all fields');
      return;
    }
    this.userAuthService.register(this.userObj).subscribe({
      next: (res: any) => {
        alert('Register successful, Please login');
        this.router.navigateByUrl('login');
      },
      error: (err: any) => {
        console.error('Registration error:', err);
        if (err.status === 401) {
          alert(err.error.message);
        } else {
          alert(
            'An error occurred during registration. Please try again later.'
          );
        }
      },
    });
  }
}
