import { Injectable } from '@angular/core';
import { HttpService } from '../HTTP/http.service'

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor(private httpservice:HttpService) { }

  GetAllParty()
  {
    return this.httpservice.get('api/Party',true);
    
  }
  GetAllConstituency()
  {
    return this.httpservice.get('api/Constituency',true);
    console.log("gdyusfyudfys");
  }
  GetAllCandidate()
  {
    return this.httpservice.get('api/Candidate',true)
  }
  AddParty(data)
  {
    return this.httpservice.post('api/Party',data)
  }
  deleteParty(partyid) {
    return this.httpservice.delete('api/Party/'+ partyid, true)
  }
}
