import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected title = 'Angular-20';
  // name=new FormControl ('anil');
  // password=new FormControl ('1234');

  // displayValue(){
  //   console.log(this.name.value,this.password.value);

  // }
  // setValues(){
  //   this.name.setValue('peter');
  //   this.password.setValue('321')

  // 

  getMe() {
    alert('hello')
  }

  validateEmail(email: string) {
    //alert(email);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(regex.test(email))
    {
      alert('Valid email address');
    }
    else
    {
      alert('InValid email address');

    }
    
    // if (email.length < 5) {
    //   alert('Invalid Email');
    //   return false
    // }
    // else if () {

    // } else {
    //   return true
    // }
  }



}
