import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  router = inject(Router);
  authService = inject(AuthService);

  login(event: any) {
    event.preventDefault();
    this.authService.setUserAuthenticationStatus(true);
    localStorage.setItem('isAuthenticated', 'true');
    this.router.navigate(['/page']);
    // window.open('home')
  }
}
