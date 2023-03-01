import { Component,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-versionChild',
  templateUrl: './versionChild.component.html',
  styleUrls: ['./versionChild.component.css']
})
export class VersionChildComponent implements OnChanges {

  constructor() { }

  @Input() major=0;
  @Input() minor=0;
  changeLog:string[]=[];

  ngOnChanges(changes:SimpleChanges){
    const log:string[]=[];
    for(const propertyName in changes){
      const changedProp=changes[propertyName];
      const to=JSON.stringify(changedProp.currentValue);
      if(changedProp.isFirstChange()){
        log.push(`Initial value of ${propertyName} set to ${to}`)
      }
      else{
        const from=JSON.stringify(changedProp.previousValue);
        log.push(`${propertyName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

}
