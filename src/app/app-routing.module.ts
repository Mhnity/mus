import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CovidComponent } from './shard/covid/covid.component';
import { Motanaw3Component } from './shard/motanaw3/motanaw3.component';
import { NotfoundComponent } from './shard/notfound/notfound.component';
import { OstaziComponent } from './shard/ostazi/ostazi.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'covid', component:CovidComponent},
  {path:'osatzi', component:OstaziComponent},
  {path:'motanaw3', component:Motanaw3Component},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
