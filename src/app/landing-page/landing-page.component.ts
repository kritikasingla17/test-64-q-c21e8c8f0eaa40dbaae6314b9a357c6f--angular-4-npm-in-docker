import { Component, OnInit } from '@angular/core';
import test_Data from '../../assets/data.js';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public lead_data;
  constructor() { }

  ngOnInit() {
    this.lead_data=test_Data;
  }

}
