import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDetailsComponent } from './admin-details.component';

const routes: Routes = [
    { path: '', component: AdminDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDetailsRoutingModule { 
    constructor(){
        console.log('AdminDetails Routing');
    }
}