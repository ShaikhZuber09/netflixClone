import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInFormComponent } from './shared/components/sign-in-form/sign-in-form.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path:"",
    component:LandingPageComponent
  }
,
  {
    path:"signIn",
    
    component: SignInFormComponent
  },{
    path:"signUp",
    component: SignInFormComponent
  },
  {
    path:"movies",
    loadChildren:()=>import('./shared/modules/movies/movies.module').then(m=>m.MoviesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
