import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieLandaingPageComponent } from './component/movie-landaing-page/movie-landaing-page.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AppModule } from 'src/app/app.module';

const routes:Routes=[{
  path:'',
  component:MovieLandaingPageComponent
}

]

@NgModule({
  declarations: [
    MovieLandaingPageComponent,
   
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class MoviesModule { }
