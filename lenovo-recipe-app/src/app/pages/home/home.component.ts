import { Component } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RecipeCardComponent, RouterLink],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  recipes!: Recipe[];
  // recipes$!: Observable<Recipe[]>;

  constructor(private recipeService: RecipeService) {
    this.recipes = recipeService.recipes;

    // this.recipeService.getRecipes().subscribe({
    //   next: (res: any) => {
    //     this.recipes = res?.recipes ?? [];
    //   },
    //   // error: (err) => console.error('Observer got an error: ' + err),
    //   // complete: () => console.log('Observer got a complete notification'),
    // });

    // You can also do this:
    // this.recipeService.getRecipes().subscribe((res: any) => {
    //   console.log('Observer got a next value: ' + res);
    //   this.recipes = res?.recipes ?? [];
    // });
  }

  clickedImage(event: any) {
    console.log('Clicked image', event);
  }
}
