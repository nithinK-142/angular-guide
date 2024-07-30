import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentOneComponent } from '../components/component-one/component-one.component';
import { ComponentTwoComponent } from '../components/component-two/component-two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentOneComponent, ComponentTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-guide';
}
