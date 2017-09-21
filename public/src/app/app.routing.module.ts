import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard'
import { UserauthService } from './userauth.service';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: '',  loadChildren: './admin-main/admin-main.module#AdminMainModule', canActivate: [AuthGuard]},
  { path: 'Login', loadChildren: './login/login.module#LoginModule' },
  { path: '**', component: PagenotfoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class AppRoutingModule {

    constructor(){
    console.log("App Routing Module");}
 }