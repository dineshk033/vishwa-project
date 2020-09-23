import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {PrimengCustomModule} from './primeng-module/primeng-module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebLoginComponent } from './web-login/web-login.component';
import { WebSignUpComponent } from './web-sign-up/web-sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AutoCompleteSearchComponent } from './auto-complete-search/auto-complete-search.component';
import { CustomstyleDirective } from './auto-complete-search/customstyle.directive';

@NgModule({
  declarations: [
    AppComponent,
    WebLoginComponent,
    WebSignUpComponent,
    NavbarComponent,
    SidebarComponent,
    AutoCompleteSearchComponent,
    CustomstyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengCustomModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
