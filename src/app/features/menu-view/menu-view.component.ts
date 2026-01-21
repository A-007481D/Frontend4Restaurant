import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Dish } from '../../core/models/dish.model';
import { MenuService } from '../../core/services/menu.service';
import { DishCardComponent } from '../../shared/components/dish-card/dish-card.component';
import { addItem } from '../../store/order/order.actions';

@Component({
  selector: 'app-menu-view',
  standalone: true,
  imports: [CommonModule, DishCardComponent],
  templateUrl: './menu-view.component.html',
  styleUrl: './menu-view.component.css'
})
export class MenuViewComponent implements OnInit {
  private menuService = inject(MenuService);
  private store = inject(Store);
  menu$!: Observable<Dish[]>;

  ngOnInit() {
    this.menu$ = this.menuService.getMenu();
  }

  onAdd(dish: Dish) {
    this.store.dispatch(addItem({ dish }));
  }
}
