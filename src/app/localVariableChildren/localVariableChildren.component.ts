import { Component,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-localVariableChildren',
  templateUrl: './localVariableChildren.component.html',
  styleUrls: ['./localVariableChildren.component.css']
})
export class LocalVariableChildrenComponent implements OnDestroy{


  intervelId=0;
  message='';
  seconds=10;

  ngOnDestroy(){
    this.clearTimer();
  }

  start(){
    this.countDown();
  }
  stop(){
    this.clearTimer();
    this.message=`Holding Time at ${this.seconds} seconds`;
  }

  private clearTimer(){
    clearInterval(this.intervelId);
  }

  private countDown(){
    this.clearTimer();
    this.intervelId=window.setInterval(()=>{
      this.seconds-=1;
      if(this.seconds===0){
        this.message='Dear Aspirians, 6PM Traveler and Tempo traveller will leave shortly , Have a pleasant evening! :)';
      }
      else{
        if(this.seconds<0){
          this.seconds=10;
        }
        this.message=`Time-${this.seconds} seconds and Timing`;
      }
    },1000)
  }
  

}
