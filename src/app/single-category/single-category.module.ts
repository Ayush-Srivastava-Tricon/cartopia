import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleCategoryRoutingModule } from './single-category-routing.module';
import { SingleCategoryComponent } from './single-category.component';


@NgModule({
  declarations: [SingleCategoryComponent],
  imports: [
    CommonModule,
    SingleCategoryRoutingModule
  ],
  exports:[SingleCategoryComponent]
})
export class SingleCategoryModule { }
