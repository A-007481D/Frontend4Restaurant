import { Injectable } from '@angular/core';

import { Observable , of } from  'rxjs';
import { delay } from 'rxjs/operators';
import { Dish} from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuData: Dish[] = [
    { id: 1, name: 'Classic Burger', description: 'Beef patty, lettuce, tomato', price: 80, category: 'main', imageUrl: 'https://foodish-api.com/images/dosa/dosa15.jpg' },
    { id: 2, name: 'Cheese Pizza', description: 'Mozzarella, tomato sauce', price: 90, category: 'main', imageUrl: 'https://foodish-api.com/images/dosa/dosa22.jpg' },
    { id: 3, name: 'Caesar Salad', description: 'Romaine, croutons, parmesan', price: 60, category: 'starter', imageUrl: 'https://foodish-api.com/images/dosa/dosa33.jpg' },
    { id: 4, name: 'Truffle Pasta', description: 'Creamy sauce with black truffle', price: 120, category: 'main', imageUrl: 'https://foodish-api.com/images/dosa/dosa41.jpg' },
    { id: 5, name: 'Grilled Salmon', description: 'Served with asparagus', price: 140, category: 'main', imageUrl: 'https://foodish-api.com/images/dosa/dosa52.jpg' },
    { id: 6, name: 'Cola Zero', description: '33cl can', price: 20, category: 'drink', imageUrl: 'https://foodish-api.com/images/dosa/dosa18.jpg' },
    { id: 7, name: 'Orange Juice', description: 'Freshly squeezed', price: 30, category: 'drink', imageUrl: 'https://foodish-api.com/images/dosa/dosa27.jpg' },
    { id: 8, name: 'Tiramisu', description: 'Classic Italian dessert', price: 50, category: 'dessert', imageUrl: 'https://foodish-api.com/images/dosa/dosa45.jpg' },
    { id: 9, name: 'Espresso', description: 'Strong coffee', price: 15, category: 'drink', imageUrl: 'https://foodish-api.com/images/dosa/dosa37.jpg' },
    { id: 10, name: 'Chocolate Cake', description: 'Rich and moist chocolate cake', price: 55, category: 'dessert', imageUrl: 'https://foodish-api.com/images/dosa/dosa58.jpg' }
  ];

  getMenu(): Observable<Dish[]> {
    return of(this.menuData).pipe(delay(500));
  }
}
