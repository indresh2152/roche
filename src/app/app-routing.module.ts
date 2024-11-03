import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { signOutGuard } from './app-common/guards/sign-out.guard';
import { authGuard } from './app-common/guards/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./app-common/components/login/login.component').then(component => component.LoginComponent), canActivate: [signOutGuard] },
  { path: 'page', loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule), canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
