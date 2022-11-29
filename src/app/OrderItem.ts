import { MenuItem } from "./MenuItem";

export interface OrderItem {
    id: number;
    itemList: MenuItem[];
    total: number;
    status: string;
  }