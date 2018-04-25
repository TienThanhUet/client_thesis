import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {Constants} from '../../../constants';

@Injectable()
export class MoviePageService{
    constructor(private http:HttpClient){

    }

    getMovie(tconst:string):Observable<any>{
        return this.http.get(`${Constants.GET_MOVIE}?tconst=${tconst}`);
    }

    getArtists(tconst:string):Observable<any>{
        return this.http.get(`${Constants.GET_MOVIE_ARTISTS}?tconst=${tconst}`);
    }
}
