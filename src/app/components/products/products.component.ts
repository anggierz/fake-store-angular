import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/store.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {


   products: Product[] = [];
   productsByCategory: Product[] = [];
   categorySearch: string | null = null;
   

   constructor(private storeService: StoreService, private route: ActivatedRoute, private location: Location) {}

   ngOnInit(): void {
      this.categorySearch = this.route.snapshot.paramMap.get('category');
      this.storeService.getProducts().subscribe({
        next: (productsFetched) => {
          this.products = productsFetched;
          console.log(this.categorySearch);
          this.productsByCategory = productsFetched.filter((product) => product.category == this.categorySearch);
          console.log(this.productsByCategory);
        },
        error: (err) => {
          console.error('Error fetching products:', err);
        }
      });
   }

   backClicked() {
    this.location.back();
  }
}
