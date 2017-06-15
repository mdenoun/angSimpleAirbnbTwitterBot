import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-airbnb-card',
  templateUrl: './airbnb-card.component.html',
  styleUrls: ['./airbnb-card.component.css']
})
export class AirbnbCardComponent implements OnInit {
  @Input() file;
  @Input() dispValue1;
  @Input() dispValue2;
  @Input() isSelected;
  @Input() enableHover;
  constructor() { }

  ngOnInit() {
  }

}
