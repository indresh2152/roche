import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { AppCommonModule } from 'src/app/app-common/app-common.module';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';


@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantCardComponent,
    RestaurantComponent
  ],
  imports: [
    AppCommonModule,
    CommonModule,
    RestaurantsRoutingModule
  ]
})
export class RestaurantsModule { }
