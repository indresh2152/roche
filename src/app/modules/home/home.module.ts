import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AppCommonModule } from 'src/app/app-common/app-common.module';
import { SectionsComponent } from './components/sections/sections.component';
import { SectionCardComponent } from './components/section-card/section-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    SectionsComponent,
    SectionCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppCommonModule
  ]
})
export class HomeModule { }
