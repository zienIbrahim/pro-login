
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';



@Injectable(
{

  providedIn: 'root'

})




export class AuthService 
{

  BaseUrl = 'http://localhost:57723/api/Auth/Login';

  constructor(private http : HttpClient) { }


  loginX(model:any)
  {
console.log("Model : Login",model);
    return this.http.post(this.BaseUrl, model).pipe
    (

      map((Response:any) =>
      {
        const user = Response;

        if(user){localStorage.setItem('token' , user.token);}

      })

    )


  }


}
