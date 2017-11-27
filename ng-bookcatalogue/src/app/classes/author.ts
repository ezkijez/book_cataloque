export class Author {
  private _id: number;
  private _name: string;
  private _nationality: string;
  private _bio: string;

  public constructor(id: number, name: string, nationality: string, bio: string) {
    this._id = id;
    this._name = name;
    this._nationality = nationality;
    this._bio = bio;
  }


  get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get nationality(): string {
    return this._nationality;
  }

  public get bio(): string {
    return this._bio;
  }
}
