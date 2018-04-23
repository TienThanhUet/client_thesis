export class MovieDetails{
    constructor(
     public   id:string ='',

     public tconst:string = '',

     public titleType:string = '',

     public primaryTitle:string = '',

     public image:string = '',

     public imageTrailer:string = '',

     public trailer:string = '',

     public storyline:string = '',

     public region:string = '',

     public isAdult:number = 0,

     public startYear:number = 1995,

     public runtimeMinutes:string = '',

     public genres:string = '',

     public averageRating:number = 0,

     public numVotes:number = 0
    ){}
}
