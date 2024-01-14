import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieLandaingPageComponent } from './component/movie-landaing-page/movie-landaing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CorouselHolderComponent } from './component/corousel-holder/corousel-holder.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';


const routes:Routes=[{
  path:'',
  component:MovieLandaingPageComponent
},
{
  path:":id",
  component:MovieDetailsComponent
}

]

@NgModule({
  declarations: [
    MovieLandaingPageComponent,
    CorouselHolderComponent,
    MovieDetailsComponent,
   
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CarouselModule 
  ],
  exports:[RouterModule]
})
export class MoviesModule { }
