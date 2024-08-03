import { Routes } from '@angular/router';
import { ReactiveFormComponent } from '../components/forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from '../components/forms/template-form/template-form.component';

export const routes: Routes = [
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'template-form',
    component: TemplateFormComponent,
  },
];
