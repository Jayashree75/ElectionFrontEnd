import { Injectable } from '@angular/core';
import{HttpService} from '../HTTP/http.service'
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpservice:HttpService) { }
  Login(data)
  {
    return this.httpservice.post('api/Admin/AdminLogin',data)
  }
  Registration(data)
  {
    return this.httpservice.post('api/Admin',data)
    console.log(data)
  }
}
