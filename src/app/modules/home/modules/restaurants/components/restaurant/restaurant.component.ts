import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WsService } from 'src/app/app-common/services/restapi/ws.service';

@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  route = inject(ActivatedRoute);
  wsService = inject(WsService);
  _location = inject(Location);
  resName: string = '';
  resDetails: any;
  resOrderMenuDetails: any;
  basicInfo: any;
  menu: any;
  menuItems: any = [];
  loadingDone = false;
  isError = false;

  ngOnInit() {
    this.resName = this.route?.snapshot?.params['restaurantId'];
    this.getRestaurantDetails();
  }

  getRestaurantDetails() {
    this.isError = false;
    this.wsService.getRestaurantDetails(this.resName)?.subscribe({
      next: (response: any) => {
        this.resDetails = response;
        this.basicInfo = this.resDetails?.page_data?.sections?.SECTION_BASIC_INFO;
        this.getRestaurantOrderMenuDetails();
      },
      error: (error: any) => {
        this.loadingDone = true;
        this.isError = true;
        console.log('Restaurant details fetch failed. Error: ', error);
      }
    });
  }

  getRestaurantOrderMenuDetails() {
    this.isError = false;
    this.wsService.getRestaurantOrderMenu(this.resName)?.subscribe({
      next: (response: any) => {
        this.resOrderMenuDetails = response;
        this.menu = this.resOrderMenuDetails?.page_data?.order?.menuList?.menus;
        this.menu?.forEach((obj: any) => {
          this.menuItems.push(...obj?.menu?.categories?.[0]?.category?.items);
        });
        this.loadingDone = true;
      },
      error: (error: any) => {
        this.loadingDone = true;
        this.isError = true;
        console.log('Restaurant order menu details fetch failed. Error: ', error);
      }
    });
  }

  backClicked() {
    this._location.back();
  }
}
