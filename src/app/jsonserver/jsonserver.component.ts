import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-jsonserver',
  templateUrl: './jsonserver.component.html',
  styleUrls: ['./jsonserver.component.css']
})
export class JsonserverComponent implements OnInit {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:3000/posts";

  getValue(){
    return this.http.get(this.url);
  }
  ngOnInit() {
  }

}
