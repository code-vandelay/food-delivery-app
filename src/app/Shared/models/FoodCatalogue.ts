import { FoodItem } from "./fooditem";
import { Restaurant } from "./restaurant";

export interface FoodCataloguePage{
    foodItemsList:FoodItem[];
    restaurant:Restaurant;
}