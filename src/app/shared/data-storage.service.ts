import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  fetchRecipes() {}

  addRecipes() {
    const recipes = this.recipesService.getRecipes();
    const recipesUrl = environment.apiUrl;
    this.http.put(recipesUrl, recipes).subscribe((response) => {
      console.log('res from add recipes', response);
    });
  }
}
