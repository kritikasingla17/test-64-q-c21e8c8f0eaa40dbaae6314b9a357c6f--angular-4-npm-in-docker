import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
@Injectable()
export class LandingPageService {

  constructor(private http:HttpClient) { }

  getLeadList=()=>{
    return this.http.get('/api/leads/?location_string=India');
  }

  addNewLead=(lead)=>{
    console.log(lead)
    return this.http.post("api/leads/",lead)
  }

  deleteLead=(id)=>{
    return this.http.delete(`api/leads/${id}/`);
  }

  updateLead=(id,communication)=>{
    return this.http.put(`api/mark_lead/${id}`,communication);
  }

}
