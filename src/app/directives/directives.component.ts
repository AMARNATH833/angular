import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent{

  user:User[]=[
    {
      "userId":1,
      "userName":'Amar'
    },
    {
      "userId":2,
      "userName":'Mugesh'
    }
  ]
}
