import { createAction, props } from '@ngrx/store';
import { Dish } from '../../core/models/dish.model';

export const addItem = createAction(
  '[Menu View] Add Item',
  props<{ dish: Dish }>()
);
