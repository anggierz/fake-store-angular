import { Routes } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
    {
        path: 'store',
        component: StoreComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    }
];
