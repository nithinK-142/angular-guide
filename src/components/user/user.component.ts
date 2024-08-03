import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  username: string;
  password: string;
  isEditing?: boolean;
  editUsername?: string;
  editPassword?: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
})
export class UserComponent {
  newUser = { username: '', password: '' };
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data.map((user: User) => ({ ...user, isEditing: false }));
      },
      error: (error) => console.error('Error fetching users:', error),
    });
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
        this.newUser = { username: '', password: '' };
      },
      error: (error) => console.error('Error creating user:', error),
    });
  }

  editUser(user: User) {
    user.isEditing = true;
    user.editUsername = user.username;
    user.editPassword = user.password;
  }

  cancelEdit(user: User) {
    user.isEditing = false;
  }

  updateUser(user: User) {
    if (user.editUsername && user.editPassword) {
      const updatedUser: User = {
        id: user.id,
        username: user.editUsername,
        password: user.editPassword,
      };

      this.userService.updateUser(updatedUser).subscribe({
        next: () => {
          user.username = updatedUser.username;
          user.password = updatedUser.password;
          user.isEditing = false;
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
}
