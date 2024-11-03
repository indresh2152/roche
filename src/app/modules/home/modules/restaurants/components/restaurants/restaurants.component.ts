import { Component, inject, OnInit } from '@angular/core';
import restaurants from '../../../../../../data/restaurants.json';
import { AuthService } from 'src/app/app-common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  resturantsList: any = [];
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit() {
    this.resturantsList = [];
    restaurants?.forEach(res => {
      const cuisines: string[] = [];
      res?.info.cuisine?.forEach(item => {
        cuisines.push(item?.name);
      });
      const details = {
        ...res?.info,
        cuisines: cuisines,
        clickUrl: res?.cardAction?.clickUrl
      }
      this.resturantsList.push(details);
    });
  }

  goToRestaurant(restaurant: any) {
    this.router.navigate([`page/order-online/${restaurant.clickUrl}`]);
  }
}
