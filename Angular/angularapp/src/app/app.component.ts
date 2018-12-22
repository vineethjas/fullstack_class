import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';
  myName='Suraj';
  location:string='Ernakulam';
  status:boolean=false;
  myName1='';
  myRoll=0;

  constructor(){

  
  setTimeout(() => {
  this.status=true;
   }, 10000);
  }

  clickme=()=>{
   this.status=false;
  }

  getstatus()
  {
  return this.status;
  }

  onSubmit(form:NgForm){
   
    this.myName1=form.value.getName;
    this.myRoll=form.value.getRoll;
   if(this.myRoll==10)
   {
     console.log("You are eligible")
   }
   else{
    console.log("You are Not eligible")
   }

  }
  
}
