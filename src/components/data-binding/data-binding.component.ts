import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserRolesService } from '../../services/user-roles.service';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  framework: string = 'Angular 18';
  concept: string = 'Data Binding';
  inputType: string = 'text';
  otherFramework: string = 'React JS';

  username = signal('Nithin');

  constructor(private userRolesService: UserRolesService) {}
  adminMessage(): string {
    let message = '';
    this.userRolesService.rolesSubject$.subscribe((role) => {
      if (role === 'Admin') {
        return (message = 'Nithin is an Admin');
      }
      return (message = '');
    });
    return message;
  }

  showAlert(message: string) {
    alert(message);
  }

  updateUsername(event: Event) {
    const target = event.target as HTMLInputElement;
    this.username.set(target.value);
  }
}
