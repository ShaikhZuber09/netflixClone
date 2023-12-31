import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
 isAccount:boolean=false;
  constructor( private _routes:ActivatedRoute) { }

  ngOnInit(): void {
  if( this._routes.routeConfig?.path === "signIn"){
    this.isAccount= true;
  }
  else{
    this.isAccount=false;
  }
   
    
  }

}
