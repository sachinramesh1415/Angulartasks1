import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component7',
  templateUrl: './component7.component.html',
  styleUrls: ['./component7.component.css']
})
export class Component7Component implements OnInit {

  constructor() { }
  @Input() public parentData;
  ngOnInit() {
  }

}
