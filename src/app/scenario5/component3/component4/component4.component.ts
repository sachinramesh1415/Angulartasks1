import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  constructor() { }
  @Output() public childEvent = new EventEmitter();
  fireEvent(value) {
    this.childEvent.emit(value);
  }
  ngOnInit() {
  }

}
