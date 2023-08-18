import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  fetchRecipes() {}

  addRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http
      .put(
        'https://recipe-shopping-app-fafdb-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log('res from add recipes', response);
      });
  }
}
