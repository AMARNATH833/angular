import { Component } from '@angular/core';

@Component({
  selector: 'app-templateDrivenForm',
  templateUrl: './templateDrivenForm.component.html',
  styleUrls: ['./templateDrivenForm.component.css']
})
export class TemplateDrivenFormComponent{

  constructor() { }
  
  LoginUser(values:string){
    console.log(values)
  }
}
