import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {Constants} from '../../../constants';

@Injectable()
export class DashboardService{
     constructor(private http:HttpClient){

     }

     topMovieType(type:string,startYear=2017):Observable<any>{
         return this.http.get(`${Constants.MOVIE_TOP_TYPE}?type=${type}`);
     }

    listMovieType(type:string,page:number,pageSize:number):Observable<any>{
        return this.http.get(`${Constants.MOVIE_LIST_TYPE}?type=${type}&page=${page}&pageSize=${pageSize}`);
    }
}
