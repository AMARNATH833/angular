import { Component} from '@angular/core';
import { CalenderService } from '../calender.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent{
  values:any;
  mobile:any;
  word:string="AmarNath";
  name="red";
  applyColor="false";
  favColor="purple";
  FirstName:string="";
  LastName:string="";
  todayDate:string|undefined;
  DataName:string|undefined;
  Money:number=69999;
  percent:number=0.99;
  decimal:number=1.25456789;

  constructor(private calender:CalenderService){  }

  onPress(event:any){
    this.values+=event.target.value+'|';
  }
  enter(mobile:string){
    this.mobile=mobile;
  }

  showData($event:any){
    console.log("Yes action is done ");
    if($event){
      console.log($event.target);
      console.log($event.target.value)
    }
  }

  FullName(){
    return this.FirstName+""+this.LastName;
  }

  ngOnInit():void{
    this.todayDate=new Date().toDateString();
    this.DataName="VivoV20 SMARTPHONE";
  }

}
