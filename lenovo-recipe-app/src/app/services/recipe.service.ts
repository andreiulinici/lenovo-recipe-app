import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: '1',
      name: 'Classic Margherita Pizza',
      image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
      tags: ['Pizza', 'Italian'],
      prepTimeMinutes: 10,
      cookTimeMinutes: 10,
    },
  ];

  // Subject is basically an EventEmitter. It doesn't have an initial value, and doesn’t 'hold' the value. It emits it, then it's done.
  // private readonly recipes$ = new Subject<Recipe[]>();

  // BehaviourSubject emits an initial value.
  // private readonly recipes$ = new BehaviorSubject<Recipe[]>([]);

  constructor(private httpClient: HttpClient) {}

  // Observable is the general concept, two special types of observables are Subject and BehaviorSubject
  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>('https://dummyjson.com/recipes');
  }
}
