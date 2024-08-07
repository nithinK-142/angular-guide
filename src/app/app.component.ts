import { Component, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  Router,
  NavigationEnd,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

interface RouteItem {
  title: string;
  link?: string;
  children?: RouteItem[];
}

type Routes = RouteItem;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'angular-guide';
  currentRoute: string = '';
  openDropdowns: string[] = [];

  routes: Routes[] = [
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
        {
          title: 'Template Directive',
          children: [
            {
              title: 'Ng Template',
              link: 'directive/template-directive/ng-template',
            },
            {
              title: 'Ng Container',
              link: 'directive/template-directive/ng-container',
            },
          ],
        },
      ],
    },
    { title: 'Control Flow Statements', link: 'control-flow-statements' },
    { title: 'Pipe', link: 'pipe' },
    { title: 'API Call', link: 'api-call' },
    { title: 'LifeCycle', link: 'lifecycle' },
    { title: 'Viewchild', link: 'viewchild' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
        this.openDropdowns = [];
      });
  }

  toggleDropdown(routePath: string) {
    const index = this.openDropdowns.indexOf(routePath);
    if (index > -1) {
      this.openDropdowns.splice(index, 1);
    } else {
      this.openDropdowns.push(routePath);
    }
  }

  isDropdownOpen(routePath: string): boolean {
    return this.openDropdowns.includes(routePath);
  }

  isRouteActive(route: Routes): boolean {
    if (route.link) {
      return this.currentRoute === '/' + route.link;
    } else if (route.children) {
      return route.children.some((child) => this.isRouteActive(child));
    }
    return false;
  }

  getRoutePath(route: Routes): string {
    return route.link || route.title;
  }

  trackByFn(index: number, item: RouteItem): string {
    return item.link || item.title;
  }
}
