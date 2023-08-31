import { Component, DoCheck, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserdata={"email":"","password":""}

  constructor(private _router:Router,private _auth:AuthService){}
 
  ngOnInit(): void {
   if(this._auth.isAuthenticated()){
    this._router.navigate(['/home/main'])
   }
  }



  loginUser(){
    if(this._auth.loginUser()){
     this._router.navigate(['/home/main'])
    }else{
      alert('Login Failed')
    }
  }

}
