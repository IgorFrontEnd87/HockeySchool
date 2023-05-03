import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CenterComponent } from './center/center.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SkatesComponent } from './skates/skates.component';
import { CoachComponent } from './coach/coach.component';
import { PriceComponent } from './price/price.component';
import { ApplicationComponent } from './application/application.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'center', component: CenterComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'skates', component: SkatesComponent },
  { path: 'coach', component: CoachComponent },
  { path: 'price', component: PriceComponent },
  { path: 'application', component: ApplicationComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
