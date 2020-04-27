import { Injectable } from '@angular/core';
import { HttpService } from '../HTTP/http.service'
@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private httpservice:HttpService) { }
  AddCandidate(data)
  {
    return this.httpservice.post('api/Candidate',data)
  }
  deletecandidate(candidateid) {
    return this.httpservice.delete('api/Candidate/'+ candidateid, true)
  }
}
