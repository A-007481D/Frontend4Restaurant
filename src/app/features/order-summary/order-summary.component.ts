import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { selectCartItems, selectGrandTotal } from '../../store/order/order.selectors';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { CartItem } from '../../core/models/cart.model';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styles: []
})
export class OrderSummaryComponent {

  cartItems$: Observable<CartItem[]> = this.store.select(selectCartItems);
  total$: Observable<number> = this.store.select(selectGrandTotal);



  constructor(private store: Store) { }
}
