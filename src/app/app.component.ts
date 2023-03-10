import { Component, ViewEncapsulation } from '@angular/core';
import { PrimeCalculator } from './app.prime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'angular';
  
  hooksArray:string[]=[];
  enterValue: any;
  constructor(){
    // this.hooksArray.push({'name':'amar'})
  }

  onDestroy(){
    this.hooksArray.splice(0,1);
  }

  collector={
    Firstname:"Amar",
    Lastname:"Nath"
  }
  prime10:number=0;
  prime10000:number=0;

  find10thPrimeNumber(){
    this.prime10=PrimeCalculator.findNthPrime(10);  
  }
  find1000thPrimeNumber(){
    if(typeof Worker!=='undefined'){
      const worker=new Worker('./app.worker',{type:'module'})
      worker.onmessage=({data})=>{
        this.prime10000=data;
      };
      worker.postMessage(10000);
    }
    else{
      //return error...
    }
  }

  googleAssit(){
    alert("Hi my Friend")
  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}