import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AdminloginComponent} from './Component/adminlogin/adminlogin.component'
import{AdminRegistrationComponent} from './Component/admin-registration/admin-registration.component'
import { Routes, RouterModule } from '@angular/router'; 
import{DashboardComponent} from './Component/dashboard/dashboard.component'
import{PartyComponent} from './Component/party/party.component'
import { ConstituencyComponent } from './Component/constituency/constituency.component';
import { CandidateComponent } from './Component/candidate/candidate.component';
const route: Routes = [
  { path: '', component:AdminloginComponent },
  {path:'' , redirectTo:'/login',pathMatch:'full'},
  { path: 'Register', component:AdminRegistrationComponent },
  {path:'' , redirectTo:'/Registration',pathMatch:'full'},
  { path:'dashboard', component: DashboardComponent ,
  children:[
    { path:'Party', component: PartyComponent},
    {path:"Constituency" , component:ConstituencyComponent},
    {path:"Candidate",component:CandidateComponent}
  ]
}
 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)

  ],
  declarations: [],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
