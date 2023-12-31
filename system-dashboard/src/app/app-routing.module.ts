import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindashComponent } from './maindash/maindash.component';
import { VoltageComponent } from './voltage/voltage.component';
import { CurrentComponent } from './current/current.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { RocofComponent } from './rocof/rocof.component';
import { Voltage_phaseComponent } from './voltage_phase/voltage_phase.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard, CanDeactivateGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"site",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:AuthenticatedComponent,
   canActivateChild:[AuthGuard],canDeactivate:[CanDeactivateGuard],
   children:[
    {path:"main",component:MaindashComponent},
    {path:"voltage",component:VoltageComponent},
    {path:"voltage_phase",component:Voltage_phaseComponent},
    {path:"current",component:CurrentComponent},
    {path:"frequency",component:FrequencyComponent},
    {path:"rocof",component:RocofComponent},
   ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
