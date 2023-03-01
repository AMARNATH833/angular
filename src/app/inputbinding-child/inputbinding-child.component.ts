import { Component, Input } from '@angular/core';
import { Name } from '../nameList';

@Component({
  selector: 'app-inputbinding-child',
  templateUrl: './inputbinding-child.component.html',
  styleUrls: ['./inputbinding-child.component.css']
})
export class InputbindingChildComponent {
  

  @Input() name!:Name;
  @Input('role') roleName='';

  ngOnInit() {
  }

}
