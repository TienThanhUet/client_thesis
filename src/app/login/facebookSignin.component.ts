import {Component,AfterViewInit} from '@angular/core'
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
    selector: 'facebook-signin',
    template: '<a class="btn" id="facebookBtn" (click)="loginWithFacebook()"><img src="assets/images/facebook_icon.png" width="50px"></a>'
})

export class FacebookSigninComponent implements AfterViewInit{
    constructor(private fb: FacebookService) {

        let initParams: InitParams = {
            appId: '444096426008297',
            xfbml: true,
            version: 'v2.8'
        };

        fb.init(initParams);

    }

    loginWithFacebook(): void {

        this.fb.login()
            .then((response) => console.log(response))
            .catch((error: any) => console.error(error));

    }

    ngAfterViewInit(): void {

    }

}
