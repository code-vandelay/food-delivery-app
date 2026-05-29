import { Component } from '@angular/core';
import { Restaurant } from '../../Shared/models/restaurant';
import { RestaurantService } from '../service/restaurant.service';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-restaurant-listing',
  standalone: false,
  templateUrl: './restaurant-listing.html',
  styleUrl: './restaurant-listing.css',
})
export class RestaurantListing {

  public restaurantList: Restaurant[];

  ngOnInit(){
    this.getAllRestaurants();
  }

  constructor(private router: Router, private restaurantService: RestaurantService) { }
  
  getAllRestaurants(){
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList = data;
      }
    )
  }

  getRandomNumber(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomImage(): string {
    const imageCount = 8
    const randomIndex =  this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`;
  }

  onButtonClick(id: number){
    this.router.navigate(['/food-catalogue', id]);
  }
}
