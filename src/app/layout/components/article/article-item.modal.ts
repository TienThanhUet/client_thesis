export class ArticleItem{
    constructor(
        public link:string='',
        public title:string='',
        public description:string='',
        public imagelink:string='',
        public content:string='',
        public postAt:Date=new Date()
    ){}
}
