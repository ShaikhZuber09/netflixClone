import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordianComponent } from './shared/components/accordian/accordian.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { GettingStartedComponent } from './shared/components/getting-started/getting-started.component';
import { NetflinInfoComponent } from './shared/components/netflin-info/netflin-info.component';
import { SignInFormComponent } from './shared/components/sign-in-form/sign-in-form.component';
import { LandingPageComponent } from './shared/components/landing-page/landing-page.component';
import { DividerComponent } from './shared/components/divider/divider.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccordianComponent,
    NavbarComponent,
    GettingStartedComponent,
    NetflinInfoComponent,
    SignInFormComponent,
    LandingPageComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports:[NavbarComponent]
})
export class AppModule { }
