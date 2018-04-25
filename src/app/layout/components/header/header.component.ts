import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { AuthService } from "../../../oauth2/auth.service";
import {HeaderService} from './header.service';

import {MovieSearchItem} from './model/movieSearchItem';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    username = 'Welcome you'
    pushRightClass: string = 'push-right';
    textSearch:string = ''

    movieSearchList:MovieSearchItem[] =[];

    constructor(private translate: TranslateService,
                public router: Router,
                private authService: AuthService,
                private headerService:HeaderService) {

        this.translate.addLangs(['en','vn']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|vn/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.rltAndLtr();
        this.getProfile();
    }

    getProfile(){
        this.headerService.getProfile().subscribe(
            response=>{
                this.username = response.data.username;
            },
            err=>{}
        )
    }

    processSearch(textSearch){
        this.headerService.processSearch(textSearch).subscribe(
            response=>{
                this.movieSearchList = response.data as MovieSearchItem[];
            },
            err=>{}
        )
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
