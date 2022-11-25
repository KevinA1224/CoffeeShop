import { Injectable } from '@angular/core';
import { MenuItem } from './MenuItem';
import { MENUITEMS } from './mock-menu-items';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  getMenuItems(): Observable<MenuItem[]> {
    const menuItems = of (MENUITEMS);
    this.messageService.add('MenuItemService: fetched menu items');
    return menuItems;
  }

  constructor(private messageService: MessageService) { }
}


