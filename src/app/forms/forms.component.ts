import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  signupForm:FormGroup<any>;
  firstName:string="";
  lastName:string="";
  emailId:string="";
  password:string="";
  
  constructor(private formbuilder:FormBuilder) {
    
    this.signupForm=formbuilder.group({
      fname:new FormControl(),
      lname:new FormControl(),
      email:new FormControl(),
      userpassword:new FormControl()
    });
   }

  ngOnInit() {
  }

  postData(signupForm:NgForm){
    console.log(signupForm.controls)
  }

}
