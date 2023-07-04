import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { MyHighlightDirective } from '../shared/my-highlight.directive';
import { ProductService } from '../shared/product.service';


@NgModule({
  declarations: [ProductComponent, MyHighlightDirective],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers:[ProductService],
  exports:[ProductComponent]
})
export class ProductModule { }
