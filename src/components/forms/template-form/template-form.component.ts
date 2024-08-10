import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../../models/class/Customer';
import { ICustomer } from '../../../models/interface/ICustomer';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
})
export class TemplateFormComponent {
  // creating variable to bind form - class
  // creating variable to hold array - interface

  // initializing with class
  formObj: Customer = new Customer();

  // initializing with interface
  formObjI: ICustomer = {
    firstname: '',
    lastname: '',
    password: '',
    city: '',
    state: '',
    zipcode: '',
    isSendLetter: false,
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    if (this.formObj.firstname) {
      // process form
      console.log(this.formObj);
    }
  }

  resetForm() {
    this.submitted = false;
    this.formObj = {
      firstname: '',
      lastname: '',
      password: '',
      city: '',
      state: '',
      zipcode: '',
      isSendLetter: false,
    };
  }
}
