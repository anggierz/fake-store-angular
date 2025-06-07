import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/store.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  url: string = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {

   }


   getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }

  getProductById(id: string) : Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}/${id}`);
  }
}
