import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model/product';

@Pipe({
  name: 'sortBy'
})
export class SortByTitlePipe implements PipeTransform {

  transform(products: Product[], property: keyof Product): Product[] {
    return products.sort((a,b) => {
      if(a[property] < b[property]){
        return -1
      }
      return 1;
    });
  }

}
