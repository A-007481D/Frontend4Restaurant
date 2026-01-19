import { Injectable } from '@angular/core';

import { Observable , of } from  'rxjs';
import { delay } from 'rxjs/operators';
import { Dish} from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly STORAGE_KEY = 'restaurant_menu';

  constructor() {
     this.seedData();
  }

  private seedData(): void {
    const existing = localStorage.getItem(this.STORAGE_KEY);
    if (!existing) {
      const initialMenu: Dish[] = [
        { id: 1,  name:  'Classic Burger', description: 'Beef patty, lettuce, tomato', price: 80, category: 'main'},
      ];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(initialMenu));
      console.log('Data seeded to localStorage!');
    }
  }
}
