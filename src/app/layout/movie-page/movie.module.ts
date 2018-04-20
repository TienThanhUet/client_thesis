import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';

import { MovieComponent } from './movie-page.component';
import {SidebarComponent} from './components/sidebar/sidebar.component'

@NgModule({
    imports: [CommonModule, MovieRoutingModule],
    declarations: [MovieComponent,SidebarComponent]
})
export class MovieModule {}
