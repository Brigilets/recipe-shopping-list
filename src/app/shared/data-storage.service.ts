import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { environment } from '../../environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  fetchRecipes() {
    const recipesUrl = environment.apiUrl;
   return  this.http
      .get<Recipe[]>(recipesUrl)
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipesService.setRecipes(recipes);
        })
      )

  }

  addRecipes() {
    const recipes = this.recipesService.getRecipes();
    const recipesUrl = environment.apiUrl;
    this.http.put(recipesUrl, recipes).subscribe((response) => {
      console.log('res from add recipes', response);
    });
  }
}
