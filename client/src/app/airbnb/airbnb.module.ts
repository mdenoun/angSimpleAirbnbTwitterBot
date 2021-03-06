import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirbnbComponent } from './airbnb.component';
import {SharedModule} from "../shared/shared.module";
import {AirbnbService} from "./airbnb.service";
import { AirbnbCardComponent } from './airbnb-card/airbnb-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [AirbnbComponent, AirbnbCardComponent],
  exports: [AirbnbComponent],
  providers: [AirbnbService]
})
export class AirbnbModule { }
