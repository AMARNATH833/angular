import { Component} from '@angular/core';
import { ViewChild,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { DynamicComponentComponent } from '../dynamicComponent/dynamicComponent.component';

@Component({
  selector: 'app-dynamicParent',
  template:`<ng-template #dynamicComponent></ng-template>`,
  styleUrls: ['./dynamicParent.component.css']
})
export class DynamicParentComponent {

  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  dynamicComponent!: ViewContainerRef;

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  ngAfterViewInit(){
    const componentFactory=this.componentFactoryResolver.resolveComponentFactory(DynamicComponentComponent);

    const componentRef=this.dynamicComponent.createComponent(componentFactory);
  }

}
