
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

  /* Forms */
  /* Forms */
  /* Forms */
  loginFormGroup: FormGroup ;

  model : any = {};

  constructor(private authservices: AuthService , private router : Router , private formBuilder: FormBuilder) { 

    this.loginFormGroup =  this.formBuilder.group({

      Username: ["", Validators.required],
      Password: ["",Validators.required],
 });
 
  }

  isLogin :boolean=true;


  ngOnInit(): void
  {
    this.initForms();
  }
  initForms() {
 /* Login form initialization */


  }

  login()
  {
    console.log("Login :")
 // Construct user login payload object
 const loginData: UserLogin = {
  Username : this.loginFormGroup.controls.Username.value,
  Password: this.loginFormGroup.controls.Password.value,
};
// let Username:string =this.loginFormGroup.get("Username").value;
// let Password: string =this.loginFormGroup.get("Password").value;

console.log(" Login Model :",this.loginFormGroup);


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
