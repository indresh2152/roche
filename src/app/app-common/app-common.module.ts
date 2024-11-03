import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CorsErrorComponent } from './components/cors-error/cors-error.component';



@NgModule({
  declarations: [
    MenuComponent,
    CorsErrorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    MenuComponent,
    CorsErrorComponent
  ]
})
export class AppCommonModule { }
