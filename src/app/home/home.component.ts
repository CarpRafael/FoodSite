import { Component} from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/modules/Food';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from "../tags/tags.component";
import { NotFoundComponent } from '../not-found/not-found.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchComponent, TagsComponent, RouterModule, NotFoundComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  foods:Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params["searchTerm"])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params["searchTerm"]);
      else if(params["tag"])
        this.foods = this.foodService.getAllFoodsByTag(params["tag"]);
      else
        this.foods = this.foodService.getAll();
    })
  }

}
