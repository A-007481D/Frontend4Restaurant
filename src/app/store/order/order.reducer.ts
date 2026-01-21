import { createReducer, on } from '@ngrx/store';
import { Dish } from '../../core/models/dish.model';
import { addItem } from './order.actions';

export interface OrderState {
    items: Dish[];
}

export const initialState: OrderState = {
    items: []
};

export const orderReducer = createReducer(
    initialState,
    on(addItem, (state, { dish }) => ({
        ...state,
        items: [...state.items, dish]
    }))
);
