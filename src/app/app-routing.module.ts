import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './services/guards/logged-in.service';
import { LoggedOutGuard } from './services/guards/logged-out.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'coupons',
    loadChildren: () => import('./pages/coupons/coupons.module').then( m => m.CouponsPageModule)
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./pages/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'coupon/:id',
    loadChildren: () => import('./pages/coupon/coupon.module').then( m => m.CouponPageModule)
  },
  {
    path: 'account',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'login',
    canActivate: [LoggedOutGuard],
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    canActivate: [LoggedOutGuard],
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
