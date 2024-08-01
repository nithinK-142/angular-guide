import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
})
export class TemplateFormComponent {
  @ViewChild('form') form!: NgForm;

  formObj = {
    firstname: '',
    lastname: '',
    password: '',
    city: '',
    state: '',
    zipcode: '',
    isSendLetter: false,
  };

  formSubmission = {};

  submitted = false;

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.formObj);
      this.resetForm();
    }
  }

  resetForm() {
    if (this.form) {
      this.form.resetForm();
    }
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
