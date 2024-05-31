import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredients : Ingredient[];
  //@Output() shoppingItems = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    
  }


  onAdd(){
    
    const newIngredients = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    console.log("newIngredients",newIngredients);
    //this.shoppingItems.emit(newIngredients);
   // this.shoppingListService.shoppingItems.emit(newIngredients);
    this.shoppingListService.addIngredients(newIngredients);
  }

}
