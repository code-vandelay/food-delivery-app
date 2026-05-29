import { FoodItem } from "../../Shared/models/fooditem";
import { Restaurant } from "../../Shared/models/restaurant";

export interface OrderDTO{

    foodItemsList?: FoodItem[];
    userId?: number;
    restaurant?: Restaurant;
}