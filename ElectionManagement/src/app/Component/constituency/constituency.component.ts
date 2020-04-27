import { Component, OnInit } from '@angular/core';
import { PartyService } from '../../Services/Party/party.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstituencyService } from '../../Services/Constituency/constituency.service'
@Component({
  selector: 'app-constituency',
  templateUrl: './constituency.component.html',
  styleUrls: ['./constituency.component.css']
})
export class ConstituencyComponent implements OnInit {
  searched = [];
  user = [];
  ConstituencyAdd: FormGroup;
  IsConstituency: boolean = true;
  constructor(private constituencyservice: ConstituencyService, private formbuilder: FormBuilder, private partyservice: PartyService, private router: Router) { }

  ngOnInit() {
    this.ConstituencyAdd = this.formbuilder.group({
      Name: ['', [Validators.required]],
      City: ['', [Validators.required]],
      State: ['', [Validators.required]]
    });
    this.GetAllConstituency()
  }
  GetAllConstituency() {
    this.partyservice.GetAllConstituency().subscribe(response => {
      console.log(response)
      this.searched = response['result']
    })
  }
  ConstituencyaddForm() {
    this.constituencyservice.AddConstituency(this.ConstituencyAdd.value).subscribe(response => { 
      console.log(response) }
    )
  }
}
