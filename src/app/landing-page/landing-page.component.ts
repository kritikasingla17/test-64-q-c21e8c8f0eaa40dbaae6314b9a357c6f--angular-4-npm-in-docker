import { Component, OnInit } from '@angular/core';
// import test_Data from '../../assets/data.js';
import {LandingPageService} from './landing-page.service';
/// <reference path ="../../node_modules/@types/jquery/index.d.ts"/>
declare var $: any 

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public lead_data;
  public lead_communication="";
  public new_lead={};
  public updated_lead={};
  public lead_id;
  constructor(private LandingPageService:LandingPageService) { }

  ngOnInit() {
    this.getLeadData();
    // this.lead_data=test_Data;
  }
   showDeleteModal=(data)=>
    {
      this.lead_id=data;
      $("#deleteLeadModal").modal(); 
    }
    showUpdateModal=(data)=>{
      $('#updateLeadModal').modal();
      this.updated_lead=data;
      this.lead_communication=data.communication;

    }
  
  addNewLead=()=>{
    this.LandingPageService.addNewLead(this.new_lead).subscribe(
      data=>{console.log(data);
       $('#addLeadModal').modal('hide')
    this.getLeadData();
        
      })

  }

   deleteLead=()=>{
    console.log("del",this.lead_id);
    this.LandingPageService.deleteLead(this.lead_id).subscribe(
      data=>{
        console.log(data);
        $('#deleteLeadModal').modal('hide');
        this.getLeadData();


      }
    )
  }

  getLeadData=()=>{
    this.LandingPageService.getLeadList().subscribe(
      data=>{this.lead_data=data; },
      err=>{console.log(err)},
      ()=>{console.log('done loading lead details')}
    )
  }

  updateLead=()=>{
    console.log("update lead");
      this.updated_lead['communication']=this.lead_communication
      console.log(this.updated_lead);
      this.LandingPageService.updateLead(this.updated_lead).subscribe(
        data=>{
          console.log(data);
          $('#updateLeadModal').modal('hide');
          this.getLeadData();


        }
      )
  }



}
