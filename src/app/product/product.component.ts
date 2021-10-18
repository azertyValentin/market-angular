import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddToBasket(): void {
    this.addToBasket.emit(this.data);
  }

}
