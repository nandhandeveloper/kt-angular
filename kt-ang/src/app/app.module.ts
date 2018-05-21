
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { HttpClientModule } from '@angular/common/http';
import { CuisinesService } from './services/cuisines.service';
import { CuisineMenuComponent } from './cuisine-menu/cuisine-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    CuisinesComponent,
    CuisineMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CuisinesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
