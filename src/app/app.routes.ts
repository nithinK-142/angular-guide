import { Routes } from '@angular/router';
import { ComponentOneComponent } from '../components/component-one/component-one.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { AttributeDirComponent } from '../components/directive/attribute-dir/attribute-dir.component';
import { StructuralDirComponent } from '../components/directive/structural-dir/structural-dir.component';

export const routes: Routes = [
  {
    path: 'components',
    component: ComponentOneComponent,
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'directive/attribute-directive',
    component: AttributeDirComponent,
  },
  {
    path: 'directive/structural-directive',
    component: StructuralDirComponent,
  },
];
