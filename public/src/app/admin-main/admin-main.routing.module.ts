import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListingComponent } from './admin-listing/admin-listing.component';

import { AdminMainComponent } from './admin-main.component';


const AdminMainRoutes: Routes = [
  { path: '',  component: AdminListingComponent,
  children:[
  { path: 'list',  component: AdminListingComponent},
  
  /*{ path: 'AddForm',  loadChildren: './admin-details/admin-details.module#AdminDetailsModule'}*/
  ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(AdminMainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminMainRoutingModule { 

  constructor(){
    console.log("Admin Main Routing");}
  
}