import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import environment from '../../environments/environment';
// import {Observable} from 'rxjs/Observable';
@Injectable()
export class LandingPageService {

  constructor(private http:HttpClient) { }

  getLeadList=()=>{
    return this.http.get(`http://3.228.13.3:4059/api/leads/?location_string=India`);
  }

  addNewLead=(lead)=>{
    console.log(lead)
    return this.http.post("http://3.228.13.3:4059/api/leads/",lead)
  }

  deleteLead=(id)=>{
    return this.http.delete(`http://3.228.13.3:4059/api/leads/${id}/`);
  }

  updateLead=(lead)=>{
    return this.http.put(`http://3.228.13.3:4059/api/mark_lead/${lead.id}`,lead);
  }

}
