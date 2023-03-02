import { Component } from '@angular/core';

@Component({
  selector: 'app-voterChildren',
  templateUrl: './voterChildren.component.html',
  styleUrls: ['./voterChildren.component.css']
})
export class VoterChildrenComponent{

  constructor() { }

  agreed=0;
  disagreed=0;
  voters=['AMAR','SAKTHI','MAHA'];

  onVoted(agreed:boolean){
    if(agreed){
      this.agreed++;
    }
    else{
      this.disagreed++;
    }
  }
}
