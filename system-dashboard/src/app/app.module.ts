import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoltageComponent } from './voltage/voltage.component';
import { CurrentComponent } from './current/current.component';
import { MaindashComponent } from './maindash/maindash.component';
import { FrequencyComponent } from './frequency/frequency.component';
import { RocofComponent } from './rocof/rocof.component';
import { Voltage_phaseComponent } from './voltage_phase/voltage_phase.component';
import { Current_phaseComponent } from './current_phase/current_phase.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    VoltageComponent,
    Voltage_phaseComponent,
    CurrentComponent,
    Current_phaseComponent,
    MaindashComponent,
    FrequencyComponent,
    RocofComponent,
    AuthenticatedComponent,
    LoginComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
		
  ],
  providers: [AuthService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
