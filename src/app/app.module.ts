import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CovidComponent } from './shard/covid/covid.component';
import { OstaziComponent } from './shard/ostazi/ostazi.component';
import { Motanaw3Component } from './shard/motanaw3/motanaw3.component';
import { NotfoundComponent } from './shard/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CovidComponent,
    OstaziComponent,
    Motanaw3Component,
    NotfoundComponent,
    FooterComponent,
    NavComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
