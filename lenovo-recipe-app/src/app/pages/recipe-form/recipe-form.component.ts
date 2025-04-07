import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.scss',
})
export class RecipeFormComponent {
  myForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      image: [
        'https://cdn.dummyjson.com/recipe-images/1.webp',
        Validators.required,
      ],
      tags: ['', Validators.required],
      prepTimeMinutes: [10, Validators.required],
      cookTimeMinutes: [10, Validators.required],
    });
  }

  onSubmit() {
    let newRecipe = this.myForm.value;
    newRecipe.id = Math.floor(Math.random() * 100);
    console.log('this.myForm', this.myForm.value);

    this.recipeService.recipes.push(newRecipe);
    console.log('updated recipes', this.recipeService.recipes);

    if (this.myForm.valid) {
      this.router.navigate(['/recipes']);
    }
  }
}
