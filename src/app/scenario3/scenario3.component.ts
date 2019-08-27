import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario3',
  templateUrl: './scenario3.component.html',
  styleUrls: ['./scenario3.component.css']
})
export class Scenario3Component implements OnInit {

  constructor() { }
  public name = "";
  onClick1(value) {
    this.name = value;
  }
  ngOnInit() {
  }

}
