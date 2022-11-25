import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../MenuItem';
import { MENUITEMS } from '../mock-menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items = MENUITEMS;

  selectedItem?: MenuItem;
  onSelect(item: MenuItem): void {
    this.selectedItem = item;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
