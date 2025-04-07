import { Routes } from '@angular/router';
import { RecipeFormComponent } from './pages/recipe-form/recipe-form.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeComponent } from './pages/recipe/recipe.component';

export const routes: Routes = [
  {
    path: 'recipes',
    children: [
      {
        path: '',
        component: HomeComponent,
        // lazy loading:
        // loadComponent: () =>
        //   import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: ':id',
        component: RecipeComponent,
      },
    ],
  },
  {
    path: 'add-recipe',
    component: RecipeFormComponent,
  },
  { path: '**', component: HomeComponent },
];
