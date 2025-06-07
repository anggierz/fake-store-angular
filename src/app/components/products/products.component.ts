import { Component } from '@angular/core';
import { Product } from '../../interfaces/store.interface';
import { Observable } from 'rxjs';
import { StoreService } from '../../services/store.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {


   products: Product[] = [];
   productsByCategory: Product[] = [];

   constructor(private storeService: StoreService) {}

   ngOnInit(): void {
      this.storeService.getProducts().subscribe({
        next: (productsFetched) => {
          this.products = productsFetched;
          console.log(this.products);
          this.productsByCategory = productsFetched; // Initially show all products
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        }
      });
   }
}
