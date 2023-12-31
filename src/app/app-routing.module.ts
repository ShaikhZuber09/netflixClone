import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInFormComponent } from './shared/components/sign-in-form/sign-in-form.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    component:LandingPageComponent
  }
,
  {
    path:"signIn",
    pathMatch:'full',
    component: SignInFormComponent
  },{
    path:"signUp",
    pathMatch:'full',
    component: SignInFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
