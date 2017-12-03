import { User } from './user';
import { Book } from './book';

export class Review {
  user: User;
  book: Book;
  review: string;
  rate: number;
  date: Date;

  public constructor(user: User,
                     book: Book,
                     review: string,
                     rate: number,
                     date?: Date) {
    this.user = user;
    this.book = book;
    this.review = review;
    this.rate = rate;
    this.date = date;
  }
}
