import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRolesService {
  rolesSubject$: Subject<string> = new Subject<string>();
  private currentUserSubject$: BehaviorSubject<string> =
    new BehaviorSubject<string>('Admin');

  setRole(role: string): void {
    this.rolesSubject$.next(role);
  }

  getRole(): Observable<string> {
    return this.rolesSubject$.asObservable();
  }

  getCurrentUser(): Observable<string> {
    return this.currentUserSubject$.asObservable();
  }

  isAdmin(): boolean {
    return this.currentUserSubject$.value === 'Admin' ? true : false;
  }
}
