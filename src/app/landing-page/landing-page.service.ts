import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
@Injectable()
export class LandingPageService {

  private apiUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  getLeadList=()=>{
    return this.http.get(`${this.apiUrl}/api/leads/?location_string=India`);
  }

  addNewLead=(lead)=>{
    console.log(lead)
    return this.http.post(`${this.apiUrl}/api/leads/`,lead)
  }

  deleteLead=(id)=>{
    return this.http.delete(`${this.apiUrl}/api/leads/${id}/`);
  }

  updateLead=(lead)=>{
    return this.http.put(`${this.apiUrl}/api/mark_lead/${lead.id}`,lead);
  }

}
