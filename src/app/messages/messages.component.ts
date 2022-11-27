import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { OrderService } from '../order.service';
import { OrderItem } from '../OrderItem';
import { OrdersComponent } from '../orders/orders.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  orders = this.messageService.orders;

  constructor(
    public messageService: MessageService,
    private orderService: OrderService) { }

  ngOnInit(): void {
  }

  addOrder(): void {
    this.orderService.addOrder(this.messageService.output())
    .subscribe(order => {
      this.orders.push(order);
    });
    this.messageService.resetOutput();
  }

}
