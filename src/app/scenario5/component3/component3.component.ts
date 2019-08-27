import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor() { }
  public message = "";
  @Output() public childEvent1 = new EventEmitter();
  fireEvent1(value) {
    this.childEvent1.emit(value);
  }
  ngOnInit() {
  }

}
