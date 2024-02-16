export default class Review {
    author : string;
    published_on? : string;
    content : string;
    rating: number;

    constructor(author : string, published_on : string,
                content : string, rating : number) {
        this.author = author;
        this.published_on = published_on;
        this.content = content;
        this.rating = rating;
    }
}