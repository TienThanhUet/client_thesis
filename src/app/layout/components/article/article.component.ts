import {Component,OnInit} from '@angular/core'
import { Router, NavigationEnd } from '@angular/router';
import {ArticleItem} from './article-item.modal'


@Component({
    selector:'artical',
    templateUrl:'./article.component.html',
    styleUrls:['./article.component.scss'],
})

export class ArticleComponent implements OnInit{
    public article:ArticleItem;

    constructor(

    ){};

    ngOnInit(): void {
        this.article = new ArticleItem();
    }
}
