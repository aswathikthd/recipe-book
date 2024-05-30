
import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();

private  recipes: Recipe[] = [
    new Recipe('Grilled Fish','This is a Salmon Grilled Fish','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IKzxj2iq48kx3vogw06yQyROaUk7qNshE0C1f-wgnQ&s',
      [ new Ingredient('Fish',2),
        new Ingredient('Lemon',2)
      ]
    ),
    new Recipe('Burger','This is a veg burger','https://5.imimg.com/data5/AF/QO/MY-43311023/veg-burger-patty.jpg',
    [ new Ingredient('Buns',2),
      new Ingredient('Chicken',2)
  ]
    ),
    new Recipe('Pasta','This is a alfredo pasta','https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/fettuccine-alfredo-1.jpg',
    [ new Ingredient('Penne',2),
    new Ingredient('Broccoli',2)
  ]
    )
  ];

  getRecipe(){
    return this.recipes.slice();
  }
}