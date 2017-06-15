import { Component, OnInit } from '@angular/core';
import {AirbnbService} from "./airbnb.service";

@Component({
  selector: 'app-airbnb',
  templateUrl: './airbnb.component.html',
  styleUrls: ['./airbnb.component.css']
})
export class AirbnbComponent implements OnInit {
  public cities;
  public rbnbItems;
  public rbnbReviews;
  public errorMessage;
  public selectedItem;
  constructor(private service:AirbnbService) {
    this.cities = service.retrieveCities();
  }

  ngOnInit() {
  }

  onItemSelected(city) {
    console.log(city);

    this.service.getRbnbItems(city)
      .subscribe(
        result => {this.rbnbItems = result['search_results'];if(this.rbnbItems.length>0) this.displayReview(this.rbnbItems[0])},
        error =>  {this.errorMessage = <any>error; console.log(error)});
  }

  displayReview(item) {
    console.log(item);
    this.selectedItem = item;
    this.service.getRbnbReviews(item)
      .subscribe(
        result => {this.rbnbReviews = result},
        error =>  {this.errorMessage = <any>error; console.log(error)});
  }

  isSelected(item) {
    return this.selectedItem.listing.id === item.listing.id
  }

}
