import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormGroupName, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myReactiveForm:FormGroup;
signsucc:boolean;
signfailed:boolean;
loginfailed:boolean;
signuser;
signpassword;
  constructor(private router:Router) { }


   signup(signuser,signpass){
     if(signuser.value!="" && signpass.value!=""){
      this.signuser=signuser.value;
      this.signpassword=signpass.value;
      this.signsucc=true;
     }else{
       this.signfailed=true;
     }
   }
   setsign(){
     this.signfailed=false;
   }


login(loginuser,loginpass){
  this.signsucc=false;
  if(this.signuser==loginuser.value && this.signpassword==loginpass.value){
    this.router.navigate(['/dashboard']);
  }else{
this.loginfailed=true;  }
}
setfalse(){
  this.loginfailed=false;
  this.signsucc=false;

}
  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(null,Validators.required),
      'password': new FormControl(null,Validators.required)
    });

  }


}
