import { Component, OnInit, SimpleChanges } from '@angular/core';
import { OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterViewChecked,AfterContentChecked,AfterViewInit,OnDestroy {

  name:string='';
  
  constructor() {
    console.log('Constructor called');
   }

  ngOnInit() {
    console.log('ngOnInit is called !');
  }

  ngOnChanges(){
    console.log('ngOnChanges is called!');
  }

  ngDoCheck() {
    console.log('ngDocheck is called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is called!')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentCheck is called!') 
  }
  
  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked is called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit is called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy is called!');
  }
    
}