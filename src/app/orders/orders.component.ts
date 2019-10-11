import { Component, OnInit } from '@angular/core';
import { Order } from '../order'
import { OrdersList } from '../mock-orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders = OrdersList;
  selectedOrder: Order;
  

  constructor() { }

  ngOnInit() {
  }

  onSelect(order: Order):void{
    this.selectedOrder = order;
    
  }

  statusUpdate():void{
    this.selectedOrder.status = 'processed'
  }



}
