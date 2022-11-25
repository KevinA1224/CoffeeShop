import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../MenuItem';
import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(): void {
    this.menuItemService.getMenuItems().subscribe(items => this.items = items.slice(1, 5));
  }

}
