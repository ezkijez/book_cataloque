import { Role } from './role';

export class User {
  private _username: string;
  private _password: string;
  private _email: string;
  private _role: string;

  constructor(username = '', password = '', email = '', role = Role.GUEST) {
    this._username = username;
    this._password = password;
    this._email = email;
    this._role = role;
  }


  get username(): string {
    return this._username;
  }

  get password(): string {
    return this._password;
  }

  get email(): string {
    return this._email;
  }

  get role(): string {
    return this._role;
  }
}
