import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

import { HeaderService } from './components/header/header.service'


import { SwiperModule } from 'angular2-useful-swiper';



@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        SwiperModule,
        FormsModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        MenuComponent],
    providers:[
        HeaderService,
    ]
})
export class LayoutModule {}
