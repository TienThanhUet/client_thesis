export class MovieItem{
    constructor(
        public id:string ='',

        public tconst:string = '',

        public titleType:string = '',

        public primaryTitle:string = '',

        public image:string = '',

        public runtimeMinutes:string = '',

        public genres:string = '',

        public averageRating:number = 0,

        public numVotes:number = 0
    ){}
}
