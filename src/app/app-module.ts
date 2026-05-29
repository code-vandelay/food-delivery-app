import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderModule } from './header/header-module';
import { RestaurantListing } from './restaurant-listing/component/restaurant-listing';
import { RestaurantListingModule } from './restaurant-listing/restaurant-listing-module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FoodCatalogueModule } from './food-catalogue/food-catalogue-module';
import { OrderSummaryModule } from './order-summary/order-summary-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RestaurantListingModule,
    HttpClientModule,
    FoodCatalogueModule,
    OrderSummaryModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
