import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';

import {MdButtonModule, MdCheckboxModule, MatInputModule, MatCardModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MdButtonModule, MdCheckboxModule, MatInputModule, MatCardModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
        constructor(){
        console.log('Login Module');
    }
}
