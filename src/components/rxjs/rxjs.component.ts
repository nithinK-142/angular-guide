import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserRolesService } from '../../services/user-roles.service';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent implements OnInit, OnDestroy {
  currentUser: string = '';
  role: string = '';
  private subscriptions: Subscription = new Subscription();

  constructor(private userRolesService: UserRolesService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.userRolesService.getCurrentUser().subscribe((user) => {
        this.currentUser = user;
      })
    );

    this.subscriptions.add(
      this.userRolesService.getRole().subscribe((role) => {
        this.role = role;
      })
    );

    this.userRolesService.setRole('Guest');
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
