import { Component, OnInit } from '@angular/core';
import{PartyService} from '../../Services/Party/party.service'
import { Router } from '@angular/router';
import{CandidateService} from '../../Services/Candidate/candidate.service'
import { FormBuilder ,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
searched=[];
parties=[];
constituency=[];
CandidateAdd:FormGroup;
user=[];
enableEdit = false;
enableEditIndex = null;
newFirstName
newLastName
newParty
newConstituency
Candidategroup:FormGroup;
  constructor(private formbuilder:FormBuilder,private partyservice:PartyService,private router:Router ,
    private candidateservice:CandidateService) { }

  ngOnInit() {
this.Candidategroup=this.formbuilder.group({
FirstName:['',[Validators.required]],
LastName:['',[Validators.required]],
partyId:[''],
ConstituencyId:['']
})

    this.GetAllUser()
    this.GetAllParty();
    this.GetAllConstituency();
  }

//   countryForm: FormGroup;
// countries = ['USA', 'Canada', 'Uk']
// constructor(private fb: FormBuilder) {}
// ngOnInit() {
//  this.countryForm = this.fb.group({
//    countryControl: ['Canada']
//  });
// }
 GetAllConstituency() {
    this.partyservice.GetAllConstituency().subscribe(response => {
      console.log(response)
      this.constituency = response['result']
    })
  }
  GetAllParty()
  {
  this.partyservice.GetAllParty().subscribe(response=>{
    console.log(response)
    this.parties=response['partylist'];
    console.log("all user list",this.user)
  }) 
}
  GetAllUser()
  {
  this.partyservice.GetAllCandidate().subscribe(response=>{
    console.log(response)
    this.searched=response['result']
    console.log(this.user)
  }) 
}
DeleteCandidate(user)
{
  console.log(user.candidateId)
this.candidateservice.deletecandidate(user.candidateId).subscribe(response=>{
})
}
candidateaddForm()
{
  console.log("candidate form")
  console.log("candidate form",this.Candidategroup.value);
  this.candidateservice.AddCandidate(this.Candidategroup.value).subscribe(data => {
    }
  )
}
enableEditMethod(e, i) {
  this.enableEdit = true;
  this.enableEditIndex = i;
  console.log(i, e);
}
}
