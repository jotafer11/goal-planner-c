import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DailyComponent } from './components/daily/daily.component';
import { HttpClientModule } from '@angular/common/http';

import { DailyService } from './services/daily.service';
import { LoadScriptsService } from "./services/load-scripts.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DailyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  DailyService,
  LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
