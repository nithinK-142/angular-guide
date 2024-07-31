import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-dir.component.html',
})
export class AttributeDirComponent {
  isAnimation: boolean = false;

  toggleAnimation() {
    this.isAnimation = !this.isAnimation;
  }
}
