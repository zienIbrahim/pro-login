import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
isLogin :boolean=true;
  ngOnInit(): void {
  }
  switchLogin() { 
    console.log("isLogin :",this.isLogin)
    this.isLogin=!this.isLogin
   
  }

}
