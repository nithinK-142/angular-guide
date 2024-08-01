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
