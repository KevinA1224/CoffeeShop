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
      {id: 1, name: 'Espresso', price: 3.20},
      {id: 2, name: 'Black Coffee', price: 2.70},
      {id: 3, name: 'Hot Chocolate', price: 2.90},
      {id: 4, name: 'Cappuccino', price: 3.00},
      {id: 5, name: 'Mocaccino', price: 3.10},
      {id: 6, name: 'Latte', price: 2.80}
    ];
    const orders = [
      {id: 99, itemList: ['Coffee', 'Espresso'], total: 5.50, status: 'open'}
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