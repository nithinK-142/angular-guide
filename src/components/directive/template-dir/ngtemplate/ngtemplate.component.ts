import { CommonModule } from '@angular/common';
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ButtonnComponent } from '../../../../reusable-components/buttonn/buttonn.component';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule, ButtonnComponent],
  templateUrl: './ngtemplate.component.html',
})
export class NgtemplateComponent {
  isUserLoggedin = false;
  isLoadTemplate = false;

  toggleLogin() {
    this.isUserLoggedin = !this.isUserLoggedin;
  }

  @ViewChild('dynamicTemplate') dynamicTemplate: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer:
    | ViewContainerRef
    | undefined;

  handleClick() {
    this.toggleTemplateLoaded();
    this.isLoadTemplate ? this.loadTemplate() : this.removeTemplate();
  }

  toggleTemplateLoaded() {
    this.isLoadTemplate = !this.isLoadTemplate;
  }

  loadTemplate() {
    if (this.dynamicTemplate) {
      this.dynamicContainer?.createEmbeddedView(this.dynamicTemplate);
    }
  }

  removeTemplate() {
    if (this.dynamicContainer) {
      this.dynamicContainer.clear();
    }
  }
}
