import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() recipeclick =new EventEmitter<Recipe>();

  recipeClicked(recipe:Recipe)
  {
    console.log("clicked " +recipe.name );
    this.recipeclick.emit(recipe);  
  }

}
