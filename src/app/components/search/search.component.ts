import { FoodServiceService } from './../../Services/food-service.service';
import { Foods } from './../../../shared/model/Food';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
@Input() foods!: Foods[]
@Output() items: EventEmitter<any> = new EventEmitter();
  constructor(private foodServiceService: FoodServiceService) { }
  // items!: Foods[]
  ngOnInit(): void {
  }
  changeValue(event:any) {
    console.log('layve', this.foodServiceService.getAllFood(event))
    this.items.emit(this.foodServiceService.getAllFood(event)) 
  }
}
