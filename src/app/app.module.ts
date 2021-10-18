import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { SortByTitlePipe } from './sort-by-title.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import {RouterModule, Routes} from '@angular/router';

registerLocaleData(localeFr);

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'basket', component: BasketComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    SortByTitlePipe,
    HomeComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: 'Title',
      useValue: 'Welcome to Zenika Ecommerces!'
    },
    {
      provide: LOCALE_ID,
      useValue: navigator.language
    },
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
