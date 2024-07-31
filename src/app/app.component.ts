import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirComponent } from '../components/directive/structural-dir/structural-dir.component';
import { AttributeDirComponent } from '../components/directive/attribute-dir/attribute-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StructuralDirComponent, AttributeDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-guide';
}
