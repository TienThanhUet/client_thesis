import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from "../oauth2/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent {
    data = {username: '', password: '', grant_type: 'password'}
    errorMessage: string

    constructor(
        private router: Router,
        private auth: AuthService) {

    }

    processLogin = (data) => {
        if(this.validate(data)) return;
        this.auth.login(data).subscribe(
            response => {
                console.log("user login!!!");
                console.log(response);
                this.auth.setToken(response.access_token);
                this.auth.setRefreshToken(response.refresh_token);

                console.log(this.auth.getRedirectUrl());
                if (this.auth.getRedirectUrl()) {
                    this.router.navigate(['/' + this.auth.getRedirectUrl()])
                } else {
                    this.router.navigate(['/layout/dashboard'])
                }

            },
            error => {
                const response = JSON.parse(error.error)
                this.errorMessage = "username or password incorrect";
            }
        )
    }

    validate(data){
        if(data.username.trim()==''){
            this.errorMessage = 'username incorrect';
            return true;
        }

        if(data.password.trim()==''){
            this.errorMessage = 'password incorrect';
            return true;
        }
        return false;
    }
}
