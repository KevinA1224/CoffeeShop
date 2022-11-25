import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../MenuItem';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {

  @Input() item?: MenuItem;

  constructor() { }

  ngOnInit(): void {
  }

}
