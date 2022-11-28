import { Injectable } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MenuItem } from './MenuItem';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      {id: 1, name: 'Espresso', price: 3.20, image: './assets/espresso.jpg'},
      {id: 2, name: 'Black Coffee', price: 2.70, image: './assets/black_coffee.jpg'},
      {id: 3, name: 'Hot Chocolate', price: 2.90, image: './assets/hot_chocolate.jpg'},
      {id: 4, name: 'Cappuccino', price: 3.00, image: './assets/cappuccino.jpg'},
      {id: 5, name: 'Frappé', price: 3.10, image: './assets/frappe.jpg'},
      {id: 6, name: 'Latte', price: 2.80, image: './assets/latte.jpg'},
      {id: 7, name: 'Brownie', price: 3.00, image: './assets/brownie.jpg'},
      {id: 8, name: 'Cupcake', price: 2.80, image: './assets/cupcake.jpg'}
    ];
    const orders = [
      {id: 1, itemList: [{id: 1, name: 'Espresso', price: 3.20, image: './assets/espresso.jpg'},{id: 2, name: 'Black Coffee', price: 2.70, image: './assets/black_coffee.jpg'}], total: 5.90, status: 'Closed'},
      {id: 2, itemList: [{id: 7, name: 'Brownie', price: 3.00, image: './assets/brownie.jpg'},{id: 4, name: 'Cappuccino', price: 3.00, image: './assets/cappuccino.jpg'}], total: 6.00, status: 'Processing'},
      {id: 3, itemList: [{id: 5, name: 'Frappé', price: 3.10, image: './assets/frappe.jpg'}], total: 3.10, status: 'Closed'},
      {id: 4, itemList: [{id: 8, name: 'Cupcake', price: 2.80, image: './assets/cupcake.jpg'}], total: 2.80, status: 'Open'},
      {id: 5, itemList: [{id: 6, name: 'Latte', price: 2.80, image: './assets/latte.jpg'},{id: 6, name: 'Latte', price: 2.80, image: './assets/latte.jpg'},{id: 6, name: 'Latte', price: 2.80, image: './assets/latte.jpg'},{id: 6, name: 'Latte', price: 2.80, image: './assets/latte.jpg'},{id: 6, name: 'Latte', price: 2.80, image: './assets/latte.jpg'},{id: 6, name: 'Latte', price: 2.80, image: './assets/latte.jpg'}], total: 16.80, status: 'Open'},
      {id: 6, itemList: [{id: 3, name: 'Hot Chocolate', price: 2.90, image: './assets/hot_chocolate.jpg'},{id: 7, name: 'Brownie', price: 3.00, image: './assets/brownie.jpg'}], total: 5.90, status: 'Open'},
      {id: 7, itemList: [{id: 1, name: 'Espresso', price: 3.20, image: './assets/espresso.jpg'}], total: 3.20, status: 'Open'}
    ];
    return {items, orders};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(items: MenuItem[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }
}