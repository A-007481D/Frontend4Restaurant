import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Dish } from '../../core/models/dish.model';
import { MenuService } from '../../core/services/menu.service';

@Component({
  selector: 'app-menu-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-view.component.html',
  styleUrl: './menu-view.component.css'
})
export class MenuViewComponent implements OnInit {
  private menuService = inject(MenuService);
  menu$!: Observable<Dish[]>;

  ngOnInit() {
    this.menu$ = this.menuService.getMenu();
  }
}
