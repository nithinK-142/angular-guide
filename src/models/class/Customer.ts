export class Customer {
  firstname: string;
  lastname: string;
  password: string;
  city: string;
  state: string;
  zipcode: string;
  isSendLetter: boolean;

  constructor() {
    (this.firstname = ''),
      (this.lastname = ''),
      (this.password = ''),
      (this.city = ''),
      (this.state = ''),
      (this.zipcode = ''),
      (this.isSendLetter = false);
  }
}
