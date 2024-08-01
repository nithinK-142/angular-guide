import {
  CommonModule,
  DecimalPipe,
  PercentPipe,
  CurrencyPipe,
  DatePipe,
  UpperCasePipe,
  LowerCasePipe,
  TitleCasePipe,
  SlicePipe,
  JsonPipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    CommonModule,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    JsonPipe,
    ReversePipe,
    NaPipe,
  ],
  templateUrl: './pipe.component.html',
})
export class PipeComponent {
  today = new Date();
  jsonObj = { name: 'John', age: 30, city: 'New York', state: '' };

  currentTime: Observable<Date> = new Observable<Date>();

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
}
