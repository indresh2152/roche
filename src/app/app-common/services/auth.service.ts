import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;

  isAuthenticated() {
    return this.isUserLoggedIn || localStorage.getItem('isAuthenticated') === 'true';
  }
   
  setUserAuthenticationStatus(status: boolean) {
    this.isUserLoggedIn = status;
  }
}
