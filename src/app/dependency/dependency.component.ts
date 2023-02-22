import { Component, OnInit } from '@angular/core';
import { CalenderService } from '../calender.service';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})
export class DependencyComponent implements OnInit {

  receiveDetail1:string[]=[];
  receiveDetail2:string[]=[];

  getDetail1(){
    this.receiveDetail1=this.service.getdetail1()
  }
  getDetail2(){
    this.receiveDetail2=this.service.getdetail2()
  }

  constructor(private service:CalenderService) { }

  ngOnInit() {
  }

}
