import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../interfaces/store.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {


  producto: Product | null = null;
  id: string | null = '';
  loading: boolean = true;

     constructor(private storeService: StoreService, private route: ActivatedRoute, private location: Location) {}
  
     ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
          this.storeService.getProductById(this.id).subscribe({
            next: (product) => {
              this.producto = product;
              this.loading = false;
              console.log(this.producto);
              console.log(this.producto?.rating.rate);
            },
            error: (err) => {
              console.error('Error fetching product:', err);
            }
          });
        } else {
          console.error('Product ID is null');
        }
}

backClicked() {
    this.location.back();
  }
}
