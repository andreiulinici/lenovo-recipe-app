import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-recipe-card',
  imports: [NgIf],
  standalone: true,
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
}
