import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Avocado toast',
      'Breakfast for champions or healthy brunch!',
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      [
        new Ingredient('Toast', 2),
        new Ingredient('Avocado ', 1),
        new Ingredient('Egg', 2),
      ]
    ),
    new Recipe(
      'Classic cheeseburger',
      'Simplicity is key!',
      'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      [
        new Ingredient('Sesamy bun', 1),
        new Ingredient('Ground beef', 200),
        new Ingredient('Vintage cheddar', 1),
        new Ingredient('Lettuce', 1),
        new Ingredient('Burger Sauce', 1),
        new Ingredient('Tomato', 0.2),
        new Ingredient('Onion', 0.1),
        new Ingredient('pickles', 1),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addMultipleIngredients(ingredients);
  }
}
