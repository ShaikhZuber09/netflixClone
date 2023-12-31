import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordianComponent } from './shared/components/accordian/accordian.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { GettingStartedComponent } from './shared/components/getting-started/getting-started.component';
import { NetflinInfoComponent } from './shared/components/netflin-info/netflin-info.component';
import { SignInFormComponent } from './shared/components/sign-in-form/sign-in-form.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordianComponent,
    NavbarComponent,
    GettingStartedComponent,
    NetflinInfoComponent,
    SignInFormComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
