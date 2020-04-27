import { Injectable } from '@angular/core';
import { HttpService } from '../HTTP/http.service'
@Injectable({
  providedIn: 'root'
})
export class ConstituencyService {

  constructor(private httpservice:HttpService) { }
  AddConstituency(data)
  {
    return this.httpservice.post('api/Constituency',data)
  }
  deleteConstituency(ConstituencyId) {
    return this.httpservice.delete('api/Constituency/'+ ConstituencyId, true)
  }
}
