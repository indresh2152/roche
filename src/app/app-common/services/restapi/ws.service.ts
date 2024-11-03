import { inject, Injectable } from '@angular/core';
import { QUICK_LINKS_URL, RESTAURANT_URL } from 'src/app/data/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  http = inject(HttpClient);

  wsRequest(options: any) {
    let response;
    try {
      switch (options.method?.toLowerCase()) {
        case 'get':
          response = this.http.get(options.url);
          break;
        default:
          break;
      }
    } catch(error: any) {
      console.log('error: ', error);
    }
    return response;
  }

  getQuickLinks() {
    const options = {
      url: QUICK_LINKS_URL,
      method: 'get'
    };

    return this.wsRequest(options);
  }

  getRestaurantDetails(resName: string) {
    const options = {
      url: RESTAURANT_URL + resName + '/info&location=&isMobile=0',
      method: 'get'
    };

    return this.wsRequest(options);
  }

  getRestaurantOrderMenu(resName: string) {
    const options = {
      url: RESTAURANT_URL + resName + '/order&location=&isMobile=0',
      method: 'get'
    };

    return this.wsRequest(options);
  }
}
