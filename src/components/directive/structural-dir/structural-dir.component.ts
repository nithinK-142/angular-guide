import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
})
export class StructuralDirComponent {
  isDivVisible: boolean = true;

  frameworks: string[] = [
    'Angular',
    'React',
    'Next',
    'Vue',
    'Svelte',
    'Astro',
    'Solid',
  ];

  toggleDivVisibility() {
    this.isDivVisible = !this.isDivVisible;
  }
}
