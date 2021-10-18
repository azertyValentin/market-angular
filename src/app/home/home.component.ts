import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../model/product';
import { CustomerService } from '../services/customer.service';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerService: CustomerService;
  productService: ProductService;
  products: Array<Product> = [];

  constructor(customerService: CustomerService, productService: ProductService, @Inject('Title') public title: string) {
    this.customerService=customerService;
    this.productService=productService;
    this.getProducts();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addToBasket(product: Product): void {
    this.customerService.addProduct(product).subscribe();
    this.productService.decreaseStock(product);
  }

  getProducts() {
    return this.productService.getProducts().pipe(
      map(products => this.products = products)
    ).subscribe()
  }
}
