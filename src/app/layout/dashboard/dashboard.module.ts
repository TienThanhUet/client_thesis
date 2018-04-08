import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent,
    SidebarComponent

} from './components';
import { StatModule,CommentModule } from '../../shared';
// import {MdCardModule} from "@angular2-material/card";
// import {MdToolbarModule} from "@angular2-material/toolbar";
// import {MdButtonModule} from "@angular2-material/button";
// import {MdInputModule} from "@angular2-material/input";
import {SwiperModule} from "angular2-useful-swiper";
import {DashboardService} from "./service/dashboard.service";
// import 'hammerjs';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        SwiperModule,
        CommentModule
        // MdCardModule,
        // MdToolbarModule,
        // MdButtonModule,
        // MdInputModule,
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        SidebarComponent
    ],
    providers:[
        DashboardService
    ]
})
export class DashboardModule {}
