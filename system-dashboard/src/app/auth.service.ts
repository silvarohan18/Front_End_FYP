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

  users=[
    {
      email:'eg183466',
      password:'3466'
    },
    {
      email:'eg183410',
      password:'3410'
    },
    {
      email:'eg183296',
      password:'3296'
    }]
  
  loginUser(email:string,password:string){
     this.auth=false

    // return this.auth
    for(let user of this.users){
      if(user.email==email && user.password==password){
        this.auth=true
        return this.auth
      }
    }
    return this.auth

  }

  logOutUser(){
    this.auth=false

    return !this.auth
  }
}