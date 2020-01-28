import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  // all the papers...
  srep20542 = false;
  anie201510885 = false;
  jz4011477 = false;
  S1876619611000672 = false;
  acm2809931 = false;
  urbcomp2015 = false;
  sub1 = false;


  constructor() { }
  ngOnInit() {
  }
}
