import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-recipe-card',
  imports: [NgIf, NgClass],
  standalone: true,
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss',
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
  @Output() imageClickEvent = new EventEmitter<Recipe>();

  clickedImage(event: any) {
    this.imageClickEvent.emit(event);
  }
}
