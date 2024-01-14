import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-corousel-holder',
  templateUrl: './corousel-holder.component.html',
  styleUrls: ['./corousel-holder.component.scss']
})
export class CorouselHolderComponent implements OnInit {

  @Input()
  movieArr !: Array<any> | null ;

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1200:{
        items:1
      }
    },
    nav: true
  }
  constructor( private _router:Router) { }

  ngOnInit(): void {

    console.log(this.movieArr);
    
  }

  onclick(){
this._router.navigate(["/movies/moviedetails"])
console.log("clicked");

  }
}
