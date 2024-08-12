import { Component, OnInit } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  Router,
  NavigationEnd,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { RouteItem, Routes, routes } from '../../constants/routes';
import { UserRolesService } from '../../services/user-roles.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, FormsModule],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  title = 'angular-guide';
  currentRoute: string = '';
  openDropdowns: string[] = [];
  routes = routes;
  selectedRole: string = '';

  constructor(
    private router: Router,
    private userRolesService: UserRolesService
  ) {}

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

  onRoleChange(selectedRole: string) {
    this.userRolesService.setRole(selectedRole);
    // this.userRolesService.rolesSubject$.next(selectedRole);
  }
}
