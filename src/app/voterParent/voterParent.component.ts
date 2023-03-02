import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-voterParent',
  templateUrl: './voterParent.component.html',
  styleUrls: ['./voterParent.component.css']
})
export class VoterParentComponent{

  constructor() { }

  @Input() name=''
  @Output() voted=new EventEmitter<boolean>();
  didVote=false;

  vote(agreed:boolean){
    this.voted.emit(agreed);
    this.didVote=true;
  }

}
