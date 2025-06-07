import { Routes } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'store',
        pathMatch: 'full'
    },
    {
        path: 'store',
        component: StoreComponent
    },
    {
        path: 'store/:category',
        component: ProductsComponent
    },
    {
        path: 'store/products/:id',
        component: ProductDetailsComponent
    }
];
