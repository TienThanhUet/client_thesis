import {Component, ElementRef, AfterViewInit} from '@angular/core';

declare const gapi: any;

@Component({
    selector: 'google-signin',
    template: '<a class="btn" id="googleBtn"><img src="assets/images/google_icon.png" width="40px"></a>'
})
export class GoogleSigninComponent implements AfterViewInit {

    private clientId:string = '877341147480-o2n7rgo8ig3dgs2n1r80vltctisnibg4.apps.googleusercontent.com';

    private scope = [
        'profile',
        'email',
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/contacts.readonly',
        'https://www.googleapis.com/auth/admin.directory.user.readonly'
    ].join(' ');

    public auth2: any;

    public googleInit() {
        gapi.load('auth2', () => {
            this.auth2 = gapi.auth2.init({
                client_id: this.clientId,
                cookiepolicy: 'single_host_origin',
                scope: this.scope
            });
            this.attachSignin(this.element.nativeElement.firstChild);
        });
    }

    public attachSignin(element) {
        this.auth2.attachClickHandler(element, {},
            (googleUser) => {
                let profile = googleUser.getBasicProfile();
                console.log(googleUser);
                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                // ...
            }, function (error) {
                console.log(JSON.stringify(error, undefined, 2));
            });
    }

    constructor(private element: ElementRef) {
        console.log('ElementRef: ', this.element);
    }

    ngAfterViewInit() {
        this.googleInit();
    }
}
