import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from '../components/forms/template-form/template-form.component';
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateFormComponent, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-guide';
}
