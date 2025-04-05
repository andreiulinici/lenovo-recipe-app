import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes = [
    {
      id: '1',
      name: 'Classic Margherita Pizza',
      image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
      tags: ['Pizza', 'Italian'],
      prepTimeMinutes: 10,
      cookTimeMinutes: 10,
    },
  ];

  constructor(private httpClient: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>('https://dummyjson.com/recipes');
  }
}
