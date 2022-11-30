import { FoodServiceService } from './../../Services/food-service.service';
import { Foods } from './../../../shared/model/Food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  constructor(
    private foodServiceService: FoodServiceService
  ) { }

  ngOnInit(): void {
    this.getAllFoodWeb()
    console.log('alo',this.foods)
  }
foods!:Foods[]
getAllFoodWeb() {
  this.foods = this.foodServiceService.getAllFood()
}
abcxyz(event:any) {
  this.foods= event
}
}
