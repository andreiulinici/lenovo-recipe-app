export interface Recipe {
  id: string;
  name: string;
  image: string;
  tags: string[];

  //   rating: number;
  //   ingredients: string[];
  //   instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    // caloriesPerServing: number;

  //   netCarbs: number;
  //   protein: number;
  //   fat: number;
  //   difficulty: string;
  //   area: string;
}
