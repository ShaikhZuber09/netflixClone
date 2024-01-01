import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LogInUpOutService {
  userArr: Array<any> = []
  baseUrl: string = environment.loginbaseurl + '.json'
  constructor(private _http: HttpClient, private _router: Router) { }


  signUp(obj: any) {
    this._http.post(this.baseUrl, obj).subscribe(res => {
      alert('Account Created Successfully go to Login Page')
      this._router.navigate(['signIn'])
    })
  }

  signIn(obj: any) {
    this._http.get(this.baseUrl).pipe(
      map((res: any) => {
        let arr = []
        for (const key in res) {
          arr.push({
            ...res[key], userId: key

          })
        }
        return arr
      })
    )
      .subscribe(res => {
        this.userArr = res
      })
 
      return  this.userArr.some(user => (user.email == obj.email && user.password == obj.password))

  }


}
