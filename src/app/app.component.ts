import { Component, Inject } from '@angular/core';
import { Product } from './model/product';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
