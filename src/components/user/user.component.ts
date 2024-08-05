import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  username: string;
  password: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
})
export class UserComponent {
  newUser = { id: 0, username: '', password: '' };
  isEditing = false;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => console.error('Error fetching users:', error),
    });
  }

  onSubmit() {
    if (this.isEditing) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  createUser() {
    if (
      this.newUser.username.trim() === '' ||
      this.newUser.password.trim() === ''
    ) {
      return;
    }

    this.userService.createUser(this.newUser).subscribe({
      next: () => {
        this.loadUsers();
        this.resetForm();
      },
      error: (error) => console.error('Error creating user:', error),
    });
  }

  updateUser() {
    if (this.newUser.username && this.newUser.password) {
      this.userService.updateUser(this.newUser).subscribe({
        next: () => {
          this.loadUsers();
          this.resetForm();
        },
        error: (error) => console.error('Error updating user:', error),
      });
    }
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => this.loadUsers(),
      error: (error) => console.error('Error deleting user:', error),
    });
  }

  editUser(user: User) {
    this.isEditing = true;
    this.newUser = { ...user };
  }

  resetForm() {
    this.newUser = { id: 0, username: '', password: '' };
    this.isEditing = false;
  }
}
