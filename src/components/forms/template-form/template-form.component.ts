import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
})
export class TemplateFormComponent {
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

  onSubmit() {
    console.log(this.formObj);
    this.resetForm();
  }

  resetForm() {
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
