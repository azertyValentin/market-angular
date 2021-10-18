import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  basket: Array<Product>;

  constructor() {
    this.basket = new Array<Product>();
  }

  addProduct(product: Product) {
    this.basket.push(product);
  }

  getTotal() {
    let total = 0;
    this.basket.forEach(product => total+=product.price)
    return total;
  }
}
