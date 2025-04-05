import { Component } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  recipes!: Recipe[];
  recipes$!: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) {
    this.recipes = recipeService.recipes;
    // this.recipeService.getRecipes().subscribe({
    //   next: (res: any) => {
    //     this.recipes = res?.recipes ?? [];
    //   },
    // });
  }
}
