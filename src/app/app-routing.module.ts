import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DailyComponent } from './components/daily/daily.component';

const routes: Routes = [

{ path:'', pathMatch: 'full', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'dailyscrums/:dailyscrumId', component: DailyComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
