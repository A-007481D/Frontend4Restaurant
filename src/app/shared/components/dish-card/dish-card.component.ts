import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from '../../../core/models/dish.model';

@Component({
  selector: 'app-dish-card',
  standalone: true,
  imports: [],
  templateUrl: './dish-card.component.html',
  styleUrl: './dish-card.component.css'
})
export class DishCardComponent {
  @Input({ required: true }) dish!: Dish;
  @Output() add = new EventEmitter<void>();
}
