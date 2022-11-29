import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { OrderService } from '../order.service';
import { MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  annotationTimer: number = 3;

  orders = this.messageService.orders;
  displayedColumns: string[] = ['item', 'price'];

  constructor(
    public messageService: MessageService,
    private orderService: OrderService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addOrder(): void {
    this.orderService.addOrder(this.messageService.output())
    .subscribe(order => {
      this.orders.push(order);
    });
    this.messageService.resetOutput();
    this.snackBar.open('Your order has been sent!', 'Close');
  }

}
