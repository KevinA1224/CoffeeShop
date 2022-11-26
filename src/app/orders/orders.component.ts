import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../OrderItem';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: OrderItem[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.orderService.getOrderItems().subscribe(orders => this.orders = orders);
    //this.orderService.getOrderItems().subscribe(items => this.orders = items.slice(1, 5));
  }

}
