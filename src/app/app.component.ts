import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular.io';
  collector={
    Firstname:"Amar",
    Lastname:"Nath"
  }
  googleAssit(){
    alert("Hi my Friend")
  }
}
