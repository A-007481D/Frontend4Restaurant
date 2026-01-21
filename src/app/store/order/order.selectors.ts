import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from './order.reducer'

export const selectOrderState = createFeatureSelector<OrderState>('order');

export const selectCartItems = createSelector(
    selectOrderState,
    (state) => state.items
);

export const selectSubtotal = createSelector(
    selectCartItems,
    (items) => items.reduce((sum, item) => sum + (item.dish.price * item.quantity), 0)
);

export const selectTax = createSelector(
    selectSubtotal,
    (subtotal) => subtotal * 0.10
);

export const selectGrandTotal = createSelector(
    selectSubtotal,
    selectTax,
    (subtotal, tax) => subtotal + tax
);
