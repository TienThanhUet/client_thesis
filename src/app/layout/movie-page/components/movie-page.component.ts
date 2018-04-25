import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

import {MoviePageService} from '../service/movie-page.service'
import {NotificationsService} from 'angular2-notifications'
import { TranslateService } from '@ngx-translate/core';

import {MovieDetails} from '../model/movieDetail';
import {ArtistItem} from "../model/artistItem";

@Component({
    templateUrl: './movie-page.component.html',
    styleUrls: ['../movie-page.component.scss']
})
export class MovieComponent implements OnInit {

    tconst='';
    genres:string[]=[]

    movieDetails:MovieDetails = new MovieDetails();
    artistItems:ArtistItem[] = [];

    constructor(
        private translate: TranslateService,
        private notifService: NotificationsService,
        private moviePageService:MoviePageService,
        private router: Router,
        private routerActive: ActivatedRoute) {
        this.translate.addLangs(['en','vn']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|vn/) ? browserLang : 'en');
    }

    ngOnInit() {
        this.tconst=this.routerActive.snapshot.queryParams["tconst"];
        if(this.tconst!=null) {
            this.getMovie();
            this.getArtist();
        }
    }

    getMovie(){
        this.moviePageService.getMovie(this.tconst).subscribe(
            response=>{
                if(response.errorCode === '00'){
                    this.movieDetails = response.data as MovieDetails;
                    this.movieDetails.trailer = "https://www.imdb.com"+this.movieDetails.trailer;
                    this.genres= this.movieDetails.genres.split(",")
                }else{
                    this.showNotifError("ERROR",response.message)
                }
            }
            ,err =>{
                this.showNotifError("ERROR",JSON.parse(err.error).message);
            }
        )
    }

    getArtist(){
        this.moviePageService.getArtists(this.tconst).subscribe(
            response=>{
                if(response.errorCode === '00'){
                    this.artistItems = response.data as ArtistItem[];
                }else{
                    this.showNotifError("ERROR",response.message)
                }
            },err =>{
                this.showNotifError("ERROR",JSON.parse(err.error).message);
            }
        )
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
