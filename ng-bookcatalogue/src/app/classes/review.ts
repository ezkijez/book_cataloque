import { User } from "./user";
import { Book } from "./book";

export class Review {
    private _user:User;
    private _book:Book;
    private _review:string;
    private _rate:number;
    private _date:Date;

    public constructor(user:User,book:Book,review:string,rate:number,date:Date){
        this._user=user;
        this._book=book;
        this._review=review;
        this._rate=rate;
        this._date=date;
    }    

    public get user():User{
        return this._user;
    }

    public get book():Book{
        return this._book;
    }

    public get review():String{
        return this._review;
    }

    public get rate():number{
        return this._rate;
    }

    public get date():Date{
        return this._date;
    }
}