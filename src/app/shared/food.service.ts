import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Food } from './food.model';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  selectedFood: Food;
  foods: Food[];
  readonly baseURL = 'http://localhost:7000/foods';


  constructor(private http: HttpClient) { }

  postFood(food: Food) {
    return this.http.post(this.baseURL, food);
  }

  getFoodList() {
    return this.http.get(this.baseURL);
  }

  putFood(food: Food) {
    return this.http.put(this.baseURL + `/${food._id}`, food);
  }

  deleteFood(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }


}
