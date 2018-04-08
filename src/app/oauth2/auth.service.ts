import {Injectable} from '@angular/core'
import * as jwt_decode from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Constants} from '../constants';
import { Observable } from 'rxjs/Observable';

export const TOKEN_NAME: string = 'jwt_token';
export const REFRESH_TOKEN: string = 'refresh_token';

@Injectable()
export class AuthService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  public isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private http: HttpClient) {

  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME)
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token)
  }

  setRefreshToken(token: string) {
    localStorage.setItem(REFRESH_TOKEN, token)
  }

  isTokenExpired(token?: string): boolean {
    //return true;
    if(!token) token = this.getToken();
    if(token) return false;
    else return true;
  }

  isLoggined(): boolean {
    if(!this.getToken()) return false;
    else return true;
  }

  login(data): Observable<any> {

    //check if exist_token
    const token = localStorage.getItem(TOKEN_NAME)
    if (token && this.isTokenExpired(token)) {
      localStorage.removeItem(TOKEN_NAME);
      localStorage.removeItem(REFRESH_TOKEN);
    }

    var body = 'username=' + data.username + '&password=' + data.password + '&grant_type=' + data.grant_type
    var headers = new HttpHeaders({
      'Authorization': 'Basic cmVzdGFwaTpyZXN0YXBp',
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    return this.http.post(Constants.LOGIN_URL, body, {headers: headers});
  }

  logout(): void {
     localStorage.removeItem(TOKEN_NAME);
     localStorage.removeItem(REFRESH_TOKEN);
     this.isLoggedIn = false;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }

}
