import { Component, Inject } from '@angular/core';
import { Product } from './model/product';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customerService: CustomerService;
  productService: ProductService;

  constructor(customerService: CustomerService, productService: ProductService, @Inject('Title') public title: string) {
    this.customerService=customerService;
    this.productService=productService;
  }

  addToBasket(product: Product): void {
    this.customerService.addProduct(product);
    this.productService.decreaseStock(product);
  }
}
