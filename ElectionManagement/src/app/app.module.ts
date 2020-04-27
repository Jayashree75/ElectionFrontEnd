import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngb-modal';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './Component/adminlogin/adminlogin.component';
import { PartyComponent } from './Component/party/party.component';
import { AdminRegistrationComponent } from './Component/admin-registration/admin-registration.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ConstituencywiseComponent } from './Component/constituencywise/constituencywise.component';
import { ConstituencyComponent } from './Component/constituency/constituency.component';
import { CandidateComponent } from './Component/candidate/candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    PartyComponent,
    AdminRegistrationComponent,
    DashboardComponent,
    ConstituencywiseComponent,
    ConstituencyComponent,
    CandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
