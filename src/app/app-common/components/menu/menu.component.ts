import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface menuItems {
  startItems?: object,
  endItems?: object
}

interface menu {
  displayText: string,
  url: string
}

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  router = inject(Router);
  authService = inject(AuthService);

  @Input({ required: true }) items: menuItems = {};
  startItems: any = [];
  endItems: any = [];

  ngOnInit(): void {
    this.startItems = this.items?.startItems;
    this.endItems = this.items?.endItems;
  }

  goToPage(item: any) {
    if (item?.url?.includes('login')) {
      localStorage.setItem('isAuthenticated', 'false');
      this.authService.setUserAuthenticationStatus(false);
    }
    this.router.navigate([item?.url]);
  }

}
