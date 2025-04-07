import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Simplest way to get params, but if they were to change then we couldn’t get notified of the new value. Other way is to subscribe to it.
    // this.queryParam = this.route.snapshot.queryParamMap.get('name') || '';
    this.id = this.route.snapshot.params['id'] || '';

    console.log(this.id);
  }
}
