import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  Router,
  NavigationEnd,
} from '@angular/router';
import { filter } from 'rxjs/operators';

interface SingleRoute {
  title: string;
  link: string;
}

interface Route {
  title: string;
  link?: string;
  children?: SingleRoute[];
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
  openDropdown: string | null = null;

  routes: Route[] = [
    { title: 'Home', link: '' },
    {
      title: 'Components',
      children: [
        {
          title: 'Component1',
          link: 'components/component1',
        },
        {
          title: 'Component2',
          link: 'components/component2',
        },
      ],
    },
    { title: 'Data Binding', link: 'data-binding' },
    {
      title: 'Directive',
      children: [
        { title: 'Attribute Directive', link: 'directive/attribute-directive' },
        {
          title: 'Structural Directive',
          link: 'directive/structural-directive',
        },
      ],
    },
    { title: 'Control Flow Statements', link: 'control-flow-statements' },
    { title: 'Pipe', link: 'pipe' },
    { title: 'API Call', link: 'api-call' },
    { title: 'LifeCycle', link: 'lifecycle' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
        this.openDropdown = null;
      });
  }

  toggleDropdown(routeTitle: string) {
    this.openDropdown = this.openDropdown === routeTitle ? null : routeTitle;
  }

  isDropdownOpen(routeTitle: string): boolean {
    return this.openDropdown === routeTitle;
  }

  isRouteActive(route: Route): boolean {
    if (route.link) {
      return this.currentRoute === '/' + route.link;
    } else if (route.children) {
      return route.children.some((child) =>
        this.currentRoute.startsWith('/' + child.link)
      );
    }
    return false;
  }
}
