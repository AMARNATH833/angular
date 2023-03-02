import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicComponent',
  template:`<p>This is My Dynamic Component</p>`,
  styleUrls: ['./dynamicComponent.component.css']
})
export class DynamicComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
