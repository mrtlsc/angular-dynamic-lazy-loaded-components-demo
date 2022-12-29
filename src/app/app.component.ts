import { Component, ComponentRef } from '@angular/core';
import { CdkPortalOutletAttachedRef, ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Observable } from 'rxjs';

export interface DynamicComponentInputs {
  input1: string;
  input2: string;

  output: Observable<string>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentPortal?: ComponentPortal<DynamicComponentInputs>;

  chooseRandomComponent() {
    const componentIndex = Math.floor(Math.random() * 3);
    if (componentIndex === 0) {
      import('./components/component1/component1.component').then((componentFile) => this.addDynamicComponent(componentFile.Component1Component));
    } else if (componentIndex === 1) {
      import('./components/component2/component2.component').then((componentFile) => this.addDynamicComponent(componentFile.Component2Component));
    } else {
      import('./components/component3/component3.component').then((componentFile) => this.addDynamicComponent(componentFile.Component3Component));
    }
  }

  addDynamicComponent(component: ComponentType<DynamicComponentInputs>) {
    this.componentPortal = new ComponentPortal(component);
  }

  connect(portalOutletRef: CdkPortalOutletAttachedRef) {
    if (portalOutletRef instanceof ComponentRef<DynamicComponentInputs>) {
      this.setInputs(portalOutletRef.instance);
      this.listenToOutputs(portalOutletRef.instance);
    }
  }

  private setInputs(component: DynamicComponentInputs) {
    component.input1 = 'Some value 1';
    component.input2 = 'Some value 2';
  }

  private listenToOutputs(component: DynamicComponentInputs) {
    component.output.subscribe((outputValue) => alert(outputValue));
  }
}
