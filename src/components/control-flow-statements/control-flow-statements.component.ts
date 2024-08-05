import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonnComponent } from '../../reusable-components/buttonn/buttonn.component';

@Component({
  selector: 'app-control-flow-statements',
  standalone: true,
  imports: [FormsModule, ButtonnComponent],
  templateUrl: './control-flow-statements.component.html',
})
export class ControlFlowStatementsComponent {
  isVisible: boolean = true;
  selectedFramework = signal<string>('');

  frameworks: string[] = [
    'Angular',
    'React',
    'Next',
    'Vue',
    'Svelte',
    'Astro',
    'Solid',
  ];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
