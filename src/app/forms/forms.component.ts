import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormRecord, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  title='Reactive Forms';
  FormDemo!: FormGroup;
  submitted!: boolean ;
  public formz=new FormGroup({});
  personForm:FormGroup=this.fb.group({});
  

  constructor(private fb:FormBuilder){ 
  }

  ngOnInit() {
    this.FormDemo=this.fb.group({
      name:['',[Validators.required]],
      mail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      cpassword:['',[Validators.required]]
    });
    this.formz.disable();
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

  setValue():void{
    try{
      this.FormDemo.setValue({
        name:"abcdefghi",
        mail:"dssd@gmail.com",
        password:"asdfgh",
        cpassword:"asdfgh",
        nationality:"Indian"
      })
    }
    catch(e){
      console.warn(e);
    }
  }

  patchValue():void{
    this.FormDemo.patchValue({
      name:"Amarnath",
      email:"amar@gmail.com",
      password:"amar@A!123",
      cpassword:"amar@A!123"
    })
  }

  // nullablity(){
  //   const email=new FormControl<string|null>(null)
  //   email.setValue('amar@angular.iov')
  // }

  // add(){
  //   this.isIndian.valueChanges.subscribe(res=>{
  //     if(res==='false'){
  //       this.personForm.add
  //     }
  //   })
  // }

  // addControl(){
  //   this.formz.addControl('test',new FormControl('India'));
  // }

  removeControl(nationality:string):void{
    this.FormDemo.removeControl('nationality')
  }

  contains(name:string){
    const answer=this.FormDemo.contains('name')
    console.log(answer)
    if(answer==true){
      console.log("name")
    }
  }

  reset(){
    this.FormDemo.reset();
    // console.log("success")
  }


}