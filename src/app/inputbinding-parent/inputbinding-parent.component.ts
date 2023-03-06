import { Component} from '@angular/core';
import { NAMES } from '../nameList';

@Component({
  selector: 'app-inputbinding-parent',
  templateUrl: './inputbinding-parent.component.html',
  styleUrls: ['./inputbinding-parent.component.css']
})
export class InputbindingParentComponent{

  names=NAMES;
  role='Developer';
  Developer!: string;

  constructor() { }


}
