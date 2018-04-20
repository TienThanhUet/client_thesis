import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {Constants} from '../constants';

@Injectable()
export class SignupService{
    constructor(private http:HttpClient){

    }

    registerUser(user):Observable<any>{
        return this.http.post(Constants.REGISTER_URL,user);
    }
}
