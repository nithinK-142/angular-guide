import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  constructor() {}

  showAlert(message: string) {
    alert(message);
  }

  updateUsername(event: Event) {
    const target = event.target as HTMLInputElement;
    this.username.set(target.value);
  }
}
