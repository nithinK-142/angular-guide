import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  Router,
  NavigationEnd,
} from '@angular/router';
import { filter } from 'rxjs/operators';

interface Route {
  title: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'angular-guide';
  currentRoute: string = '';

  routes: Route[] = [
    { title: 'Home', link: '' },
    { title: 'Components', link: 'components' },
    { title: 'Data Binding', link: 'data-binding' },
    { title: 'Attribute Directive', link: 'directive/attribute-directive' },
    { title: 'Structural Directive', link: 'directive/structural-directive' },
    { title: 'Control Flow Statements', link: 'control-flow-statements' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
      });
  }
}
