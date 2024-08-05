import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttonn',
  standalone: true,
  imports: [],
  templateUrl: './buttonn.component.html',
})
export class ButtonnComponent {
  @Input() btnText = '';
  @Input() btnClass = '';

  @Output() onBtnClick = new EventEmitter<any>();

  onClick() {
    this.onBtnClick.emit();
  }
}
