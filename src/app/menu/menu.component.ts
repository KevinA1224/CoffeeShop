import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../MenuItem';
import { MenuItemService } from '../menu-item.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  selectedItem?: MenuItem;

  constructor(private menuItemService: MenuItemService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(item: MenuItem): void {
    this.selectedItem = item;
    this.messageService.add(`name=${item.name}`);
  }

  getHeroes(): void {
    this.menuItemService.getMenuItems()
      .subscribe(items => this.items = items);
  }

}
