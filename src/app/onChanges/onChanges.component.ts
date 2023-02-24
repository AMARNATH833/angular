import { Component,SimpleChanges,OnChanges, Input,OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-onChanges',
  templateUrl: './onChanges.component.html',
  styleUrls: ['./onChanges.component.css']
})
export class OnChangesComponent implements OnChanges {

  previousValue:string|any;
  currentValue:String|any;
  constructor() { }

  ngOnInit(){  
    console.log("ngOnInit hook called");  
    this.currentValue="AMARNATH A";  
    this.previousValue="Angular";  
  } 

  @Input() simpleInput:string | undefined;
    
    

    ngOnChanges(changes:SimpleChanges){
      console.log("On changes");
      for(let propertyName in changes){
        let change=changes[propertyName];
        let current=JSON.stringify(change.currentValue);
        this.currentValue=change.currentValue;
        let previous=JSON.stringify(change.previousValue);
        this.previousValue=change.previousValue;
        console.log(propertyName + ':currentValue :- '+current+' :previousValue :- '+previous);
      }
    }

}
