import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonserver',
  templateUrl: './jsonserver.component.html',
  styleUrls: ['./jsonserver.component.css']
})
export class JsonserverComponent implements OnInit {

  constructor() { }

  url:string="http://localhost:3000/posts";

  getValue(){
    const website=this.url;
    console.log(website)
  }
  ngOnInit() {
  }

}
