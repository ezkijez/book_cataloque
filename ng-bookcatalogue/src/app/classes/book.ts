import { Author } from './author';
import { Review } from './review';

export class Book {
    private _title: string;
    private _genre: string;
    private _publicationDate: Date;
    private _authors: Set<Author>;
    private _reviews: Set<Review>;

    public constructor(title: string,
                       genre: string,
                       pdate: Date,
                       authors: Set<Author>,
                       reviews: Set<Review>) {
        this._title = title;
        this._genre = genre;
        this._publicationDate = pdate;
        this._authors = authors;
        this._reviews = reviews;
    }

    public get title(): string {
        return this._title;
    }

    public get genre(): string {
        return this._genre;
    }

    public get publicationDate(): Date {
        return this._publicationDate;
    }

    public get authors(): Set<Author> {
        const authors = new Set<Author>();
        this._authors.forEach(a => authors.add(a));
        return authors;
    }

    public get reviews(): Set<Review> {
        const reviews = new Set<Review>();
        this._reviews.forEach(r => reviews.add(r));
        return reviews;

    }
}
