import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 auth = false;
  constructor() { }

  isAuthenticated(){
    return this.auth;
  }

  loginUser(){
    this.auth=true

    return this.auth
  }

  logOutUser(){
    this.auth=false

    return !this.auth
  }
}
