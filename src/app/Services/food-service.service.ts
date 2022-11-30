import { sample_food } from './../../data';
// import { Foods } from './../../shared/model/Food';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
// data!: Foods[]
  constructor() { }
  getAllFood () {
    return sample_food 
  }
}
