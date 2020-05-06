import { Component, OnInit } from '@angular/core';
import test_Data from '../../assets/data.js';
import {LandingPageService} from './landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public lead_data;
  constructor(private LandingPageService:LandingPageService) { }

  ngOnInit() {
    this.getLeadData();
    this.lead_data=test_Data;
    // console.log(this.lead_data)
  }

  getLeadData=()=>{
    this.LandingPageService.getLeadList().subscribe(
      data=>{this.lead_data=data; },
      err=>{console.log(err)},
      ()=>{console.log('done loading lead details')}
    )
  }

}
