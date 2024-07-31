import { Component } from '@angular/core';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [],
  template: '<h2 class="comp-two">component-two works!</h2>',
  styles: ['.comp-two{color:green}'],
})
export class ComponentTwoComponent {}
