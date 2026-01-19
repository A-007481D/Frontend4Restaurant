import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-4">Your Bill</h2>
      <div class="bg-gray-100 p-8 rounded-lg text-center border border-gray-300">
        <p class="text-gray-500 text-lg">Your cart is empty.</p>
        <!-- ha fin dir table -->
        <p class="text-sm text-gray-400 mt-2">(Ticket 4: build this table)</p>
      </div>
    </div>
  `,
  styles: []
})
export class OrderSummaryComponent {}
