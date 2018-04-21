import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import {DashboardService} from "../service/dashboard.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['../dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public sliders: Array<any> = [];

    constructor(
        public dashboardService: DashboardService,
        private router: Router,
    ) {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpeg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );
    }

    ngOnInit() {
        this.dashboardService.topMovieType('Action').subscribe(
            response=>{

            }
        )
    }

    config: SwiperOptions = {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 7,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    };
}
