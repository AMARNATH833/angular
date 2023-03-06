import { Component } from '@angular/core';
import { CalenderService } from '../calender.service';
import { User } from '../user';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent{
  message!: string;

  constructor(private calender:CalenderService){}

  user:User[]=[
    {
      "userId":1,
      "userName":'Amar'
    },
    {
      "userId":2,
      "userName":'Mugesh'
    }
  ]

  day(){
    this.calender.todayDay();
  }
  log(message:string){
    this.calender.log('Hello ');
  }
}
