import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-landaing-page',
  templateUrl: './movie-landaing-page.component.html',
  styleUrls: ['./movie-landaing-page.component.scss']
})
export class MovieLandaingPageComponent implements OnInit {


  popularArr !:Observable<Array<any>>;
  nowPlaying !:Observable<Array<any>>
  upComing !:Observable<Array<any>>
  topRated !:Observable<Array<any>>


  constructor(private _http:MovieService) { }

  ngOnInit(): void {

  this.popularArr =  this._http.toGetMovies("popular")
  this.nowPlaying = this._http.toGetMovies('now_playing')
  this.upComing= this._http.toGetMovies('upcoming')
  this.topRated= this._http.toGetMovies('top_rated')

  this._http.toGetMovies('popular').subscribe(res=>console.log(res)
  )

  this._http.toGetMovies('now_playing').subscribe(res=>console.log(res)
  )
  
    
  }

}
