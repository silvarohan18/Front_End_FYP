import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private _router:Router){}

  ngOnInit(): void {
    if(false){
      this._router.navigate(['/home'])
    }else{
      this._router.navigate(['/site'])
    }
  }
  
}
