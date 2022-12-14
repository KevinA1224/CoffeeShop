import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //The images of the menu items are license free from the site pixabay (in reality we would probably buy or shoot the pictures ourselves).
    //In this context, we use the photos mainly for demo purposes.
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
}