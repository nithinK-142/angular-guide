import { Routes } from '@angular/router';
import { ComponentOneComponent } from '../components/component-one/component-one.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { AttributeDirComponent } from '../components/directive/attribute-dir/attribute-dir.component';
import { StructuralDirComponent } from '../components/directive/structural-dir/structural-dir.component';
import { ControlFlowStatementsComponent } from '../components/control-flow-statements/control-flow-statements.component';
import { PipeComponent } from '../components/pipe/pipe.component';
import { ApiCallComponent } from '../components/api-call/api-call.component';
import { ComponentTwoComponent } from '../components/component-two/component-two.component';
import { LifecycleHooksComponent } from '../components/lifecycle-hooks/lifecycle-hooks.component';

export const routes: Routes = [
  {
    path: 'components',
    children: [
      {
        path: 'component1',
        component: ComponentOneComponent,
      },
      {
        path: 'component2',
        component: ComponentTwoComponent,
      },
    ],
  },
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'directive',
    children: [
      {
        path: 'attribute-directive',
        component: AttributeDirComponent,
      },
      {
        path: 'structural-directive',
        component: StructuralDirComponent,
      },
    ],
  },
  {
    path: 'control-flow-statements',
    component: ControlFlowStatementsComponent,
  },
  {
    path: 'pipe',
    component: PipeComponent,
  },
  {
    path: 'api-call',
    component: ApiCallComponent,
  },
  {
    path: 'lifecycle',
    component: LifecycleHooksComponent,
  },
];
