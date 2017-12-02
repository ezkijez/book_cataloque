import { Author } from './author';

export class Book {
  private _id: number;
  private _title: string;
  private _genre: string;
  private _publicationDate: Date;
  private _authors: Author[];

  public constructor(title: string,
                     genre: string,
                     pdate: Date,
                     authors: Author[]) {
    this._title = title;
    this._genre = genre;
    this._publicationDate = pdate;
    this._authors = authors;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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

  set authors(value: Author[]) {
    this._authors = value;
  }

  get authors(): Author[] {
    return this._authors;
  }
}
