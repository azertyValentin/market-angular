import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';
  products: Array<Product>;
  total : number;
  constructor() {
    let productA = new Product("Men Sweatshirt", "C0D1NG_TH3_W0RLD BIO HOODIE - MEN", "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png", 39, 7)
    let productB = new Product("Men T-Shirt", "BIO T-SHIRT WITH CREWNECK - MEN.", "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png", 19, 5)
    let productC = new Product("-Shirt women", "BIO T-SHIRT WITH CREWNECK - WOMEN.", "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png", 30, 3)
    let productD = new Product("Tote bag", "C0D1NG_TH3_W0RLD, BIO TOTE BAG.", "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png", 12.5, 1)
    this.products = new Array<Product>(productA, productB, productC, productD);

    this.total = 0;
  }

  addToBasket(product: Product): void {
    this.total = this.total+product.price;
    product.stock--;
  }
}
