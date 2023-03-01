import { Component } from '@angular/core';

@Component({
  selector: 'app-versionParent',
  templateUrl: './versionParent.component.html',
  styleUrls: ['./versionParent.component.css']
})
export class VersionParentComponent{

  constructor() { }

  minor=1;
  major=33;

  newMinor(){
    this.minor++;
  }
  newMajor(){
    this.major++;
  }


}
