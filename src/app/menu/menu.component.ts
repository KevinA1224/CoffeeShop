import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../MenuItem';
import { MenuService } from '../menu.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  selectedItem?: MenuItem;

  constructor(private menuService: MenuService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  onSelect(item: MenuItem): void {
    this.selectedItem = item;
    this.messageService.add(item);
  }

  getMenuItems(): void {
    this.menuService.getMenuItems()
      .subscribe(items => this.items = items);
  }

}
