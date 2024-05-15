import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({providedIn: "root"})
export class RecipesResolverService {
    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService){}

    resolve(): Observable<Recipe[]> {
        const recipes = this.recipeService.getRecipes();

        if(recipes.length === 0){
            return this.dataStorageService.fetchRecipes().pipe(catchError(error => {
                console.error('Error fetching recipes: ', error);
                return of([]);
            }));
        } else {
            return of(recipes);
        }
    }
}