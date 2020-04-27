import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isparty:boolean=true;
  IsConstituency:boolean=true;
  isCandidate:boolean=true;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  Logout()
  {
    localStorage.removeItem("token");
    this.router.navigate([''])
  }
}
