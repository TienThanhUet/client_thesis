export class Constants {

    public static BASE_SSO: string  = "http://localhost:9998";

    public static BASE_SERVICE: string  = "http://localhost:7777";

    public static BASE_RECOMMEND: string  = "http://localhost:7780";

    public static LOGIN_URL : string = Constants.BASE_SSO + "/oauth/token";
    public static REGISTER_URL : string = Constants.BASE_SERVICE + "/user/register";
    public static USER_PROFILE = Constants.BASE_SERVICE+'/user/profile';


    public static MOVIE_TOP_TYPE = Constants.BASE_SERVICE+'/movie/movie-type/top';
    public static MOVIE_LIST_TYPE = Constants.BASE_SERVICE+'/movie/movie-type/list';

    public static GET_MOVIE = Constants.BASE_SERVICE+'/movie/details';
    public static GET_MOVIE_ARTISTS = Constants.BASE_SERVICE+'/movie/movie-artists';

    public static  PROCESS_SEARCH = Constants.BASE_SERVICE+'/search/movie';
}
