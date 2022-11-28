import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MenuItem } from './MenuItem';
import { OrderItem } from './OrderItem';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: MenuItem[] = [];
  orders: OrderItem[] = [];
  total: number = 0;
  tmpItemList: string[] = [];
  orderID: number = 0;

  add(message: MenuItem) {
    this.messages.push(message);
    this.calcTotal(this.messages);
  }

  clear(): void {
    this.messages = [];
  }

  resetOutput(): void {
    this.tmpItemList = [];
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
    this.messages.forEach((message) => {
      this.tmpItemList.push(message.name); 
    });
    return {id: this.orderID, itemList: this.tmpItemList, total: this.total, status: 'Open'};
  }


}
