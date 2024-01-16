import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Piedmontese Rice', 
            'Creamy and cheesy champignon rice with seitan steak in brown sauce.', 
            'https://static.itdg.com.br/images/640-400/2450d53a3789073c21d5ff1e4a6168b5/282972-original.jpg',
            [
                new Ingredient('Cooked rice', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Cashew cream', 1),
                new Ingredient('Champignon', 10),
                new Ingredient('Lemon juice', 1),
                new Ingredient('Butter', 1)
            ]),
        new Recipe(
            'Spiritual cod', 
            'A delicious recipe, cod cooked in olive oil, onion, bay leaf and grated carrots, that goes to the oven with mashed potato, sprinkled with grated cheese.', 
            'https://www.foodfromportugal.com/content/uploads/2013/03/spiritual-cod.jpg.webp',
            [
                new Ingredient('Potato', 10),
                new Ingredient('Cod steak', 3),
                new Ingredient('Carrot', 2),
                new Ingredient('Onion', 2),
                new Ingredient('Garlic', 4),
                new Ingredient('Olive oil', 100)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        // Using slice to return a copy of the array. We don't want this array being modified outside this class
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}