import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AdminService} from '../../Services/Admin/admin.service'
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  login: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private adminservice:AdminService) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      UserName: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  get f() { return this.login.controls; }

  loginForm() {
    this.adminservice.Login(this.login.value).subscribe(data => {
      localStorage.setItem('token', data['token']);
      console.log(data);
       this.router.navigate(['dashboard'])
   })
 }
 Register()
 {
  this.router.navigate(['/Register'])
 }
}
