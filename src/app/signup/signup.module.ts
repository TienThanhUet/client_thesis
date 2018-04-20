import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SimpleNotificationsModule} from 'angular2-notifications';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

import { SignupService} from './signup.service'

@NgModule({
  imports: [
      CommonModule,
      SignupRoutingModule,
      FormsModule,
      SimpleNotificationsModule
  ],
  declarations: [SignupComponent],
    providers:[SignupService]
})
export class SignupModule { }
