export class Author {
    private _name:string;
    private _nationality:string;
    private _bio:string;

    public constructor(name:string,nationality:string,bio:string){
        this._name=name;
        this._nationality=nationality;
        this._bio=bio;
    }

    public get name(): string{
        return this._name;
    }

    public get nationality():string{
        return this._nationality;
    }

    public get bio():string{
        return this._bio;
    }
}
