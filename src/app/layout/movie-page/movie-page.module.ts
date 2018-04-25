import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { MoviePageRoutingModule } from './movie-page-routing.module';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {SliderbarModule,CommentModule} from '../../shared';

import { MovieComponent } from './components/movie-page.component';

import {MoviePageService} from './service/movie-page.service';

@NgModule({
    imports: [CommonModule,
        MoviePageRoutingModule
        ,SimpleNotificationsModule,
        SliderbarModule,
        CommentModule,
        TranslateModule
    ],
    declarations: [MovieComponent],
    providers:[MoviePageService]
})
export class MoviePageModule {}
