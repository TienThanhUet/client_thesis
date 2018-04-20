import {Component,OnInit} from '@angular/core'
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector:'app-menu',
    templateUrl:'./menu.component.html',
    styleUrls:['./menu.component.scss']
})
export class MenuComponent implements OnInit{

    menu:string[] = [
        'PHIM MỚI',
        'THỂ LOẠI',
        'QUỐC GIA',
        'PHIM BỘ'
    ]


    constructor(

    ){}

    ngOnInit(): void {
    }

}
