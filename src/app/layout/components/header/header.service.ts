import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {Constants} from '../../../constants';

const TOKEN_NAME: string = 'jwt_token';

@Injectable()
export class HeaderService{
    constructor(private http:HttpClient){

    }

    getProfile():Observable<any>{
        let token = localStorage.getItem(TOKEN_NAME);
        return this.http.get(`${Constants.USER_PROFILE}?Authorization=${token}`);
    }

    processSearch(text:string):Observable<any>{
        return this.http.get(`${Constants.PROCESS_SEARCH}?text=${text}`);
    }
}
