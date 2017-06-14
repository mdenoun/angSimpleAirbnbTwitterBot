import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() items;
  @Output() select = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.select.emit(this.items[0]);
  }

}
