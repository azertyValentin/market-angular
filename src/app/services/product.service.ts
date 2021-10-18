import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!: Array<Product>;
  
  constructor(private http: HttpClient) {
    let productA = new Product("Men Sweatshirt", "C0D1NG_TH3_W0RLD BIO HOODIE - MEN", "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf344514006a7fe670e2eb/Mockups/front.png", 39, 7)
    let productB = new Product("Men T-Shirt", "BIO T-SHIRT WITH CREWNECK - MEN.", "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b2911e4ab33424aec592bd6/Mockups/front.png", 19, 5)
    let productC = new Product("-Shirt women", "BIO T-SHIRT WITH CREWNECK - WOMEN.", "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5b290d26ab33424aec592bd4/Mockups/front.png", 30, 3)
    let productD = new Product("Tote bag", "C0D1NG_TH3_W0RLD, BIO TOTE BAG.", "https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5acf160814006a7fe670e2dd/Mockups/front.png", 12.5, 1)
    //this.products = new Array<Product>(productA, productB, productC, productD);
   }

   getProducts() {
      return this.http.get<Product[]>('http://localhost:8080/rest/products')
   }

   isTheLast(product: Product): boolean {
      return product.stock === 1;
   }

   isAvailable(product: Product): boolean {
      return product.stock > 0;
   }

   decreaseStock(product: Product): void {
     product.stock--;
   }
}
