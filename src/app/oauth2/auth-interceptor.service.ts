import {forwardRef, Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {AuthService, REFRESH_TOKEN, TOKEN_NAME} from './auth.service';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/pairwise';
import {Constants} from '../constants';
import {HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import { map, filter, tap } from 'rxjs/operators';

const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(TOKEN_NAME);

    console.log(req);


    if(token && req.url.indexOf(Constants.LOGIN_URL) <= -1) {
      // Pass on the cloned request instead of the original request.
      const authReq = req.clone({headers: req.headers.set(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${token}`)});
      return next.handle(authReq).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
          if (event.status == 200) {
          }
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {

          if (err.status === 401) {
            // clear token, logout and redirect login
            localStorage.removeItem(TOKEN_NAME);
            localStorage.removeItem(REFRESH_TOKEN);

            this.router.navigate(['/login']);
          }
        }
      }));
    } else {
      //only login page
      return next.handle(req);
    }

  }
}
