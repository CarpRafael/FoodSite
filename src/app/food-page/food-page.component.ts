import { Component } from '@angular/core';
import { Food } from '../shared/modules/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { TagsComponent } from "../tags/tags.component";
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  imports: [CommonModule, TagsComponent, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss'
})
export class FoodPageComponent {

  food!: Food;
  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService,
              private cartService: CartService, private router:Router) {

    activatedRoute.params.subscribe((params) => {
      if(params["id"])
        this.food = foodService.getFoodById(params["id"]);
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
