import { EventEmitter } from '@angular/core';
import { Ingredient} from '../shared/ingredient.model';

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    private ingredients : Ingredient[] = [
        new Ingredient('Apples',10),
        new Ingredient('Carrot',5),
        new Ingredient('Grapes',15),
        new Ingredient('Anar',9)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredients(ingredient : Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredientsFromRecipe(ingredient : Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

}