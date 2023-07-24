import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.css'],
})
export class RecipeIngredientComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
}
