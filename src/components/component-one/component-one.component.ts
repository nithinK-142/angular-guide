import { Component } from '@angular/core';
import { ComponentTwoComponent } from '../component-two/component-two.component';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [ComponentTwoComponent],
  templateUrl: './component-one.component.html',
})
export class ComponentOneComponent {}
