import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Tag } from '../shared/modules/Tags';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  imports: [RouterModule, CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {


  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];
  constructor(private foodService:FoodService) {}

  ngOnInit(): void{
    if(!this.foodPageTags)
    this.tags = this.foodService.getAllTags();
  }

}
