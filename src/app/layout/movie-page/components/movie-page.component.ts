import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

import {MoviePageService} from '../service/movie-page.service'
import {NotificationsService} from 'angular2-notifications'

import {MovieDetails} from '../model/movieDetail';

@Component({
    selector: 'app-blank-page',
    templateUrl: './movie-page.component.html',
    styleUrls: ['../movie-page.component.scss']
})
export class MovieComponent implements OnInit {

    tconst='';

    movieDetails:MovieDetails = new MovieDetails();

    constructor(
        private notifService: NotificationsService,
        private moviePageService:MoviePageService,
        private router: Router,
        private routerActive: ActivatedRoute) {}

    ngOnInit() {
        // this.routerActive
        //     .queryParams
        //     .subscribe(params => {
        //         this.tconst = +params['tconst'] || 'tt';
        //         this.getMovie();
        //     });

        this.tconst=this.routerActive.snapshot.queryParams["tconst"];
        this.getMovie();
    }

    getMovie(){
        console.log(this.tconst)
        if(this.tconst!=null){
            this.moviePageService.getMovie(this.tconst).subscribe(
                response=>{
                    if(response.errorCode === '00'){
                        this.movieDetails = response.data as MovieDetails;
                        this.movieDetails.trailer = "https://www.imdb.com"+this.movieDetails.trailer;
                    }else{
                        this.showNotifError("ERROR",response.message)
                    }
                }
                ,err =>{
                    this.showNotifError("ERROR",JSON.parse(err.error).message);
                }
            )
        }
    }

    showNotifSuccess(title:string, content:string){
        this.notifService.success(title, content);
    }

    showNotifWarning(title:string, content:string){
        this.notifService.warn(title, content);
    }

    showNotifError(title:string, content:string){
        this.notifService.error(title, content);
    }

    readonly notifyOptions = {
        position:["bottom", "right"],
        timeOut: 2000
    };
}
