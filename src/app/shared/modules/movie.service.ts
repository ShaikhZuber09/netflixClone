import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesUrl:string="https://api.themoviedb.org/3/movie/"

  queryParam: HttpParams =new HttpParams().set("api_key","cd4a7d504db9b19d2dc078a269be6b39")

  constructor(private _http: HttpClient) { }

  toGetMovies(category:string){

    let url=`${this.moviesUrl}/${category}`
   return this._http.get<any>(url,{
      params:this.queryParam
    }).pipe(
      map(ele=> ele['results'])
    )

  }
}
