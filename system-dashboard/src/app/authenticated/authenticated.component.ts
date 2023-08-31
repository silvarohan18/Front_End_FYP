import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent {

  constructor(private auth:AuthService,private router:Router){}

  onLogout(){
    if(this.auth.logOutUser()){
      this.router.navigate(['/site'])
    }
  }

}
