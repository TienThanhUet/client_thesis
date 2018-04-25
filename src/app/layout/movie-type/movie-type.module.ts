import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MovieTypeRoutingModule } from './movie-type-routing.module';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {SliderbarModule,CommentModule} from '../../shared';
import {MovieTypeComponent} from "./components/movie-type.component";

@NgModule({
    imports: [CommonModule,
        MovieTypeRoutingModule
        ,SimpleNotificationsModule,
        SliderbarModule,
        CommentModule,
        TranslateModule
    ],
    declarations: [MovieTypeComponent],
    providers:[]
})
export class MovieTypeModule {}
