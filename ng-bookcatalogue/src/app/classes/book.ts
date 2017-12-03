import { Author } from './author';

export class Book {
  id: number;
  title: string;
  genre: string;
  publicationDate: string;
  authors: Author[];

  public constructor(id: number,
                     title?: string,
                     genre?: string,
                     pdate?: string,
                     authors?: Author[]) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.publicationDate = pdate;
    this.authors = authors;
  }
}
