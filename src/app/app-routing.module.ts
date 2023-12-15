import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WifiQrComponent } from './wifi-qr/wifi-qr.component';
import { CvRedirectGuard } from './cv-redirect.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'wifi-qr',
    component: WifiQrComponent,
  },
  {
    path: 'cv',
    redirectTo: 'dummy',
    pathMatch: 'full',
  },
  {
    path: 'dummy',
    canActivate: [CvRedirectGuard],
    component: HomeComponent,
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
