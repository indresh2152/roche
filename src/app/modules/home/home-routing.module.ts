import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from 'src/app/app-common/guards/auth.guard';
import { SectionsComponent } from './components/sections/sections.component';

const routes: Routes = [
  { path: '', redirectTo: '/page/home', pathMatch: 'full' },
  { 
    path: '',
    component: HomeComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'home', 
        component: SectionsComponent 
      },
      {
        path: 'order-online',
        loadChildren: () => import('./modules/restaurants/restaurants.module').then(module => module.RestaurantsModule), canActivate: [authGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
