import { Injectable } from '@angular/core';
import { of, Subject, Observable, BehaviorSubject } from 'rxjs';
// // import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>('');
  private isloggedIn: boolean;
  private userName: string;

  constructor() {
    this.isloggedIn = false;
  }

  login(username: string, password: string) {

    //Assuming users are provided the correct credentials.
    //In real app you will query the database to verify.
    this.isloggedIn = true;
    this.userName = username;
    this.currentUserSubject.next(username);
    return of(this.isloggedIn);
  }

  isUserLogIn(): boolean {
    return this.isloggedIn;
  }

  isUserLoggedIn$(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  isAdminUser(): boolean {
    if (this.userName == 'Admin') {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}

