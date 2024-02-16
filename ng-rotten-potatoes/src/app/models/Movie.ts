import Review from "./Review";

export default class Movie {
    id : number;
    name : string;
    rating : number;
    reviews? : Review[];

    constructor(id : number, name : string, rating : number) {
        this.id = id;
        this.name = name;
        this.rating = rating;
    }
}