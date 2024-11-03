import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/app-common/services/auth.service';
import { WsService } from 'src/app/app-common/services/restapi/ws.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  router = inject(Router);
  authService = inject(AuthService);
  wsService = inject(WsService);

  sections = [];
  startItems = [
    {
      displayText: 'Home',
      url: '/page/home'
    },
    {
      displayText: 'Order online',
      url: '/page/order-online'
    }
  ];
  endItems = [
    {
      displayText: 'Sign out',
      url: '/login'
    }
  ];

  menuItems = {
    startItems: this.startItems,
    endItems: this.endItems
  };

  goToLogin() {
    localStorage.removeItem('isAuthenticated');
    this.authService.setUserAuthenticationStatus(false);
    this.router.navigate(['/login']);  
  }
}
