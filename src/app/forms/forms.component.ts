import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  title='Reactive Forms';
  FormDemo!: FormGroup;
  submitted: boolean | undefined;

  constructor(private fb:FormBuilder){

  }

  ngOnInit() {
    this.FormDemo=this.fb.group({
      name:['',[Validators.required]],
      mail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      cpassword:['',[Validators.required]]
    });
  }
  get form(){
    return this.FormDemo.controls;
  }

  submitForm(){
    this.submitted=true;
    if(this.FormDemo.invalid){
      return ;
    }
    console.log("Name :" +this.form['name'].value)
    console.log("EMAIL-ID:"+this.form['mail'].value)
    console.log("PASSWORD:"+this.form['password'].value)
    console.log("CONFORM-PASSWORD:"+this.form['cpassword'].value)
  }
  

}
