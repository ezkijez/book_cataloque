import { Role } from './role';

export class User {
  private username: string;
  private password: string;
  private email: string;
  private role: string;

  constructor(username = '', password = '', email = '', role = Role.GUEST) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
  }

}
