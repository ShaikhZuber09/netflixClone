import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LogInUpOutService } from '../../services/log-in-up-out.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
 isAccount:boolean=false;
  constructor( private _routes:ActivatedRoute, private _router:Router, private _login:LogInUpOutService) { }
  @ViewChild('myForm') myForm:FormGroup | undefined
  ngOnInit(): void {
  ( this._routes.routeConfig?.path === "signIn")? this.isAccount= true:this.isAccount=false;
    
  }
  onSubmit(){
    if(!this.isAccount){
this._login.signUp(this.myForm?.value)
console.log(this.myForm?.value);

    }
  }
  onClick(){
    (this.isAccount=!this.isAccount)?this._router.navigate(['signIn']):this._router.navigate(['signUp'])}
}
