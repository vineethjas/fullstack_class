import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  myName='Vineeth';
  myRoll='1';
  location:string='Angamaly'
  status:boolean=false;

  getStatus (){
    return this.status; 
  }
  setStatus=()=>{
    this.status=!(this.status);
  }
constructor(){
  setInterval(() => {
    this.status=!(this.status);
  }, 1000);
}
onSubmit(form:NgForm){
console.log(form.value.getName)
this.myName=form.value.getName;
this.myRoll=form.value.getRollNo;
}
}



