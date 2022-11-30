import { Injectable } from '@angular/core';
import { MenuItem } from './MenuItem';
import { OrderItem } from './OrderItem';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: MenuItem[] = []; //saving selected Items temporarily
  orders: OrderItem[] = []; //provides orders so that both orders and message component can access it
  total: number = 0;
  orderID: number = 8; // starting from last ID from the mockup data server

  add(message: MenuItem) {
    this.messages.push(message);
    this.calcTotal(this.messages);
  }

  clear(): void {
    this.messages = [];
  }

  resetOutput(): void {
    this.orderID += 1;
    this.messages = [];
  }

  calcTotal(messages: MenuItem[]) {
    let total = 0;
    messages.forEach((message) => {
      total += message.price;
    });
    this.total = total;
  }

  output(){
    return {id: this.orderID, itemList: this.messages, total: this.total, status: 'Open'};
  }


}
