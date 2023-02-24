import { Component } from '@angular/core';

@Component({
  selector: 'app-projection',
  template:`
    <h1>This is Single Projection Example</h1>
    <ng-content></ng-content>
  `,
  styleUrls: ['./projection.component.css']
})
export class ProjectionComponent {

  
}
