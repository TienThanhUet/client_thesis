import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {GoogleSigninComponent} from "./googleSignin.component";
import { FacebookModule } from 'ngx-facebook';
import {FacebookSigninComponent} from "./facebookSignin.component";

@NgModule({
    imports: [CommonModule,
        FormsModule,
        LoginRoutingModule,
        FacebookModule.forRoot()],
    declarations: [LoginComponent,GoogleSigninComponent,FacebookSigninComponent],
    providers:[

    ]
})
export class LoginModule {}
