import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieTypeComponent } from './components/movie-type.component';

const routes: Routes = [
    {
        path: '',
        component: MovieTypeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieTypeRoutingModule {}
