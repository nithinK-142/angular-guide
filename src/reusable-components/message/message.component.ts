import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  template: '<p>{{message}}</p>',
})
export class MessageComponent {
  @Input() message = '';
}
