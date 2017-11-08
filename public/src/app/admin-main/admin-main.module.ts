import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AdminMainRoutingModule } from './admin-main.routing.module';
import { AdminMainComponent } from './admin-main.component';

import { AdminFooterComponent } from '../admin-footer/admin-footer.component';
import { AdminListingComponent } from './admin-listing/admin-listing.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

import { FormService } from './form.service';
import { EmployeesComponent } from './employees/employees.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminMainRoutingModule,
    
  ],
  declarations: [
    AdminMainComponent,
    AdminFooterComponent,
    AdminListingComponent,
    EmployeesComponent,
    AdminDetailsComponent
    
  ],
  providers: [ FormService ],
  
})
export class AdminMainModule {
  constructor(){
    console.log('Admin Main Module');
  }
  
}