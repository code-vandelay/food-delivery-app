import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCatalogueRoutingModule } from './food-catalogue-routing-module';
import { FoodCatalogueComponent } from './component/food-catalogue';


@NgModule({
  declarations: [
    FoodCatalogueComponent
  ],
  imports: [
    CommonModule,
    FoodCatalogueRoutingModule
  ]
})
export class FoodCatalogueModule { }