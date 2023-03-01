import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-setter-child',
  templateUrl: './setter-child.component.html',
  styleUrls: ['./setter-child.component.css']
})
export class SetterChildComponent{

  private surName='';
  constructor() { }

  @Input()
    get name():string{return this.surName;}
    set name(name:string){
      this.surName=(name && name.trim()) || '<Name Not Specified>'
    }
  
}
