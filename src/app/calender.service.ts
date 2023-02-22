import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  detail1:string[]=["Amar","10437","amarnath.arumugam@aspiresys.com"];
  detail2:string[]=["Gopi","10438","gp.arumugam@aspiresys.com"];

  getdetail1(): string[]{
    return this.detail1
  }
  getdetail2(): string[]{
    return this.detail2
  }

  todayDay(){
    console.log("Hi Friends have a good DAY!");
  }
  log(message:any){
    console.log(message)
    console.log("log function works!")
  }


}
