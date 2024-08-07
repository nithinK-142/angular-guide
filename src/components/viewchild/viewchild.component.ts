import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MessageComponent } from '../../reusable-components/message/message.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [MessageComponent],
  templateUrl: './viewchild.component.html',
})
export class ViewchildComponent implements AfterViewInit {
  @ViewChild('txt') textBox?: ElementRef;
  @ViewChild(MessageComponent) msgComponent?: MessageComponent;

  ngAfterViewInit(): void {
    const val = this.textBox?.nativeElement.value;
    console.log(val);
    console.log(this.msgComponent?.message);
  }
}
