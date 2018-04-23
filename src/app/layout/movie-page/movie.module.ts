import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {SliderbarModule} from '../../shared';

import { MovieComponent } from './components/movie-page.component';

import {MoviePageService} from './service/movie-page.service';

@NgModule({
    imports: [CommonModule,
        MovieRoutingModule
        ,SimpleNotificationsModule,
        SliderbarModule
    ],
    declarations: [MovieComponent],
    providers:[MoviePageService]
})
export class MovieModule {}
