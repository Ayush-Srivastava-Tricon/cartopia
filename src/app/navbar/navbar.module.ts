import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from '../product/product.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ProductModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }
