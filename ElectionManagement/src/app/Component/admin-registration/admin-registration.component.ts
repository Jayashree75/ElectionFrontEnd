import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AdminService} from '../../Services/Admin/admin.service'
@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {
  Registration: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,private adminservice:AdminService) { }

  ngOnInit() {
    this.Registration = this.formBuilder.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      MobileNumber:['',[Validators.required]],
      UserName: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.Registration.controls; }
  RegistrationForm() {
    this.adminservice.Registration(this.Registration.value).subscribe(data => {
      console.log(data);
      // this.router.navigate(['dashboard'])
   })
 }
}
