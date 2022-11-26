import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MenuItem } from './MenuItem';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: MenuItem[] = [];
  total: number = 0;

  add(message: MenuItem) {
    this.messages.push(message);
    this.calcTotal(this.messages);
  }

  clear() {
    this.messages = [];
  }

  calcTotal(messages: MenuItem[]) {
    let total = 0;
    messages.forEach((message) => {
      total += message.price;
    });
    this.total = total;
  }

}
