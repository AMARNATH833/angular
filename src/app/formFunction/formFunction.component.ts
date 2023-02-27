import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formFunction',
  templateUrl: './formFunction.component.html',
  styleUrls: ['./formFunction.component.css']
})
export class FormFunctionComponent implements OnInit {

  name=new FormControl('');
  constructor() { }

  ngOnInit() {
  }

  update(){
    this.name.setValue('AmarNath')
  }
}
