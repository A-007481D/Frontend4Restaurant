import { Routes } from '@angular/router';
import { MenuViewComponent } from './features/menu-view/menu-view.component';
import { OrderSummaryComponent } from './features/order-summary/order-summary.component';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuViewComponent },
  { path: 'order', component: OrderSummaryComponent }
];
