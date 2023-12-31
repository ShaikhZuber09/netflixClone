import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LogInUpOutService {

  baseUrl:string=environment.loginbaseurl +'.json'
  constructor(private _http:HttpClient) { }


  signUp(obj:any){
this._http.post(this.baseUrl,obj).subscribe(res=>{
  console.log(res)
})
  }
}
