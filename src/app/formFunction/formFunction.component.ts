import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formFunction',
  templateUrl: './formFunction.component.html',
  styleUrls: ['./formFunction.component.css']
})
export class FormFunctionComponent{

  name=new FormControl('');
  constructor() { }

  update(){
    this.name.setValue('AmarNath')
  }
}
