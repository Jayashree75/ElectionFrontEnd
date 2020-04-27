import { Component, OnInit } from '@angular/core';
import{PartyService} from '../../Services/Party/party.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
searched=[];
user=[];
istoggle:boolean=true;
PartyAdd: FormGroup;
EditParty: FormGroup;
  constructor(private formbuilder:FormBuilder,private partyservice:PartyService,private router:Router) { }

  ngOnInit() {
    this.PartyAdd = this.formbuilder.group({
      partyName: ['', [Validators.required]]
    });
    this.GetAllUser();
  }
  GetAllUser()
  {
  this.partyservice.GetAllParty().subscribe(response=>{
    console.log(response)
    this.searched=response['partylist']
    console.log("all user list",this.user)
  }) 
}
get f() { return this.PartyAdd.controls; }
partyaddForm() {
  this.partyservice.AddParty(this.PartyAdd.value).subscribe(data => {
    console.log(data);
    // this.router.navigate(['dashboard'])
 })
}
Deleteparty(user)
{
  console.log(user.partyId)
  this.partyservice.deleteParty(user.partyId).subscribe(data => {
    console.log(data);
})
}
}
