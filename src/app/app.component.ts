import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BranchlistComponent } from "../components/branchlist/branchlist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BranchlistComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-guide';
}
