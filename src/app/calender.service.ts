import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  todayDay(){
    console.log("Hi Friends have a good DAY!");
  }
  log(message:any){
    console.log(message)
    console.log("log function works!")
  }
}
