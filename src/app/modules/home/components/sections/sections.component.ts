import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/app-common/services/auth.service';
import { WsService } from 'src/app/app-common/services/restapi/ws.service';

@Component({
  selector: 'sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent {

  authService = inject(AuthService);
  wsService = inject(WsService);
  router = inject(Router);
  
  sections = [];
  isError = false;

  ngOnInit() {
    this.getQuickLinks();
  }

  getQuickLinks() {
    this.isError = false;
    this.wsService.getQuickLinks()?.subscribe({
      next: (response: any) => {
        this.sections = response?.page_data?.sections?.SECTION_QUICK_SEARCH?.items;
        this.sections?.forEach( (item: any, index: number) => {
          if (index !== 0) {
            item['blur'] = true;
          }
        })
      },
      error: (error: any) => {
        this.isError = true;
        console.log('error: ', error);
      }
    });
  }

  goToSection(data: any) {
    if (data.blur) {
      return;
    }
    let path = '';
    switch (data.categoryType) {
      case 'delivery': 
        path = 'page/order-online';
        break;
    }
    this.router.navigate([path]);
  }
}
