
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { UserLogin } from '../Model/UserLogin';
import { AuthService } from '../_Services/Auth.service';


@Component(
{
  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit 
{

    /* Forms */

  loginFormGroup!: FormGroup;

  model : any = {};

  constructor(private authservices: AuthService , private router : Router , private formBuilder: FormBuilder) { }

  isLogin :boolean=true;


  ngOnInit(): void
  {
    this.initForms();
  }
  initForms(): void {
 /* Login form initialization */
 this.loginFormGroup =  this.formBuilder.group({

     Username: ["", Validators.required],
     Password: ["",Validators.required],
});


  }

  login()
  {
 // Construct user login payload object
 const loginData: UserLogin = {
  Username: this.loginFormGroup.get("Username").value,
  Password: this.loginFormGroup.get("Password").value,
};
 
console.log(" Login Model :",loginData)


    this.authservices.loginX(loginData).subscribe
    (
      next => {console.log('Login Succced')},

      error => {

        console.log('Login Failed');

        this.router.navigate(['/home']);
        
      },

    );


  }



  logOut()
  {

    localStorage.removeItem('token');

    localStorage.removeItem('Log');

  }



  switchLogin() 
  { 
    console.log("isLogin :",this.isLogin)
    this.isLogin=!this.isLogin
   
  }



}
