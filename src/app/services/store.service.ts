import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  url: string = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {

   }


   getProducts() {
    return this.httpClient.get(this.url);
   }
}
