import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../OrderItem';
import { OrderService } from '../order.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders = this.messageService.orders;

  constructor(
    private orderService: OrderService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.orderService.getOrderItems().subscribe(orders => this.orders = orders);
  }

}
