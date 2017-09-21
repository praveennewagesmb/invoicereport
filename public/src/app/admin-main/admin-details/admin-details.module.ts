import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminDetailsRoutingModule } from './admin-details.routing.module';
import { AdminDetailsComponent } from './admin-details.component';
import { PreviewComponent } from './preview/preview.component';
import { CreatorComponent } from './creator/creator.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdRadioModule, MdSidenavModule, MdInputModule, MdTabsModule } from '@angular/material';
import { FormlistingComponent } from './formlisting/formlisting.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,    MdMenuModule,    MdCardModule,    MdToolbarModule,    MdIconModule,    MdRadioModule,    MdSidenavModule,    MdInputModule,    MdTabsModule,
    AdminDetailsRoutingModule
  ],
  declarations: [
    
    AdminDetailsComponent,
    PreviewComponent,
    CreatorComponent,
    ConfirmComponent,
    FormlistingComponent
  ],
  providers: [  ],
  
})
export class AdminDetailsModule {
  constructor(){
    console.log('Admin Details Module');
  }
  
}