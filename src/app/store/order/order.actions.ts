import { createAction, props } from '@ngrx/store';
import { Dish } from '../../core/models/dish.model';
import { CartItem } from '../../core/models/cart.model';

export const addItem = createAction(
  '[Order] Add Item',
  props<{ dish: Dish }>()
);

export const removeItem = createAction(
  '[Order] Remove Item',
  props<{ dishId: number }>()
);


export const loadSavedOrder = createAction(
  'Order Load saved order',
  props<{ items: CartItem[] }>()
);
