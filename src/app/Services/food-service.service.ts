import { sample_food } from './../../data';
// import { Foods } from './../../shared/model/Food';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
// data!: Foods[]
  constructor() { }
  getAllFood (event?:any) {
    if (!event) {
      return sample_food 
    } else {
      let result =  sample_food.filter(e => {
        // console.log
        return e.name.toLowerCase().includes(event)
      })
      return result
    }
    // console.log('haha',e)
  }
}
