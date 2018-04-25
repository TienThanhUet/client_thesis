import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

import {NotificationsService} from 'angular2-notifications'
import { TranslateService } from '@ngx-translate/core';

@Component({
    templateUrl: './movie-type.component.html',
    styleUrls: ['../movie-type.component.scss']
})

export class MovieTypeComponent implements OnInit{

    constructor(
        private translate: TranslateService,
        private notifService: NotificationsService,
        private router: Router,
        private routerActive: ActivatedRoute) {
        this.translate.addLangs(['en','vn']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|vn/) ? browserLang : 'en');
    }

    ngOnInit(): void {

    }
}
