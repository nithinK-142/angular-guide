import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirComponent } from '../components/directive/structural-dir/structural-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructuralDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-guide';
}
