import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


<<<<<<< HEAD
import { FoodService } from '../../shared/food.service';
import { Food } from '../../shared/food.model';

declare var M:any;
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers: [FoodService]
=======
import { Food } from 'src/app/shared/food.model';
import { FoodService } from 'src/app/shared/food.service';


declare var M: any;
@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.css'],
    providers: [FoodService]
>>>>>>> origin/scott-dev

})
export class FoodComponent implements OnInit {

<<<<<<< HEAD
  constructor(private foodService:FoodService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshFoodList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.foodService.selectedFood = {
      _id: "",
      name: "",
      quantity: null,
      description: ""
  
    }
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.foodService.postFood(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshFoodList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.foodService.putFood(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshFoodList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  onEdit(food: Food) {
    this.foodService.selectedFood = food;
  }


  refreshFoodList() {
    this.foodService.getFoodList().subscribe((res) => {
      this.foodService.foods = res as Food[];
    });
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.foodService.deleteFood(_id).subscribe((res) => {
        this.refreshFoodList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
=======
    constructor(private foodService: FoodService) { }

    ngOnInit() {
        this.resetForm();
        this.refreshFoodList();
    }

    resetForm(form?: NgForm) {
        if (form)
            form.reset();
        this.foodService.selectedFood = {
            _id: "",
            name: "",
            quantity: null,
            description: ""

        }
    }
    onSubmit(form: NgForm) {
        if (form.value._id == "") {
            this.foodService.postFood(form.value).subscribe((res) => {
                this.resetForm(form);
                this.refreshFoodList();
                M.toast({ html: 'Saved successfully', classes: 'rounded' });
            });
        }
        else {
            this.foodService.putFood(form.value).subscribe((res) => {
                this.resetForm(form);
                this.refreshFoodList();
                M.toast({ html: 'Updated successfully', classes: 'rounded' });
            });
        }
    }

    onEdit(food: Food) {
        this.foodService.selectedFood = food;
    }


    refreshFoodList() {
        this.foodService.getFoodList().subscribe((res) => {
            this.foodService.foods = res as Food[];
        });
    }

    onDelete(_id: string, form: NgForm) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.foodService.deleteFood(_id).subscribe((res) => {
                this.refreshFoodList();
                this.resetForm(form);
                M.toast({ html: 'Deleted successfully', classes: 'rounded' });
            });
        }
    }
>>>>>>> origin/scott-dev


}
