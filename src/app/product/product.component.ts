import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() 
  data!: Product;

  @Output()
  addToBasket: EventEmitter<Product> = new EventEmitter();

  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService=productService;
  }

  ngOnInit(): void {
  }

  onAddToBasket(): void {
    this.addToBasket.emit(this.data);
  }

}
