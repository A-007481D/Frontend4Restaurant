import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, loadSavedOrder } from './order.actions';
import { CartItem } from '../../core/models/cart.model'; // Fixed Import

export interface OrderState {
  items: CartItem[];
}

export const initialState: OrderState = {
  items: []
};

export const orderReducer = createReducer(
  initialState,

  on(loadSavedOrder, (state, { items }) => ({
    ...state,
    items: items
  })),

  on(addItem, (state, { dish }) => {
    const existingItem = state.items.find(i => i.dish.id === dish.id);

    if (existingItem) {
      return {
        ...state,
        items: state.items.map(item =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    } else {
      return {
        ...state,
        items: [...state.items, { dish, quantity: 1 }]
      };
    }
  }),
  on(removeItem, (state, { dishId }) => ({
    ...state,
    items: state.items.filter(item => item.dish.id !== dishId)
  }))
);
