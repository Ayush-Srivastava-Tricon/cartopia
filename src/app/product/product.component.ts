import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { AlertService } from '../shared/alert.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ProductComponent {

products:any=[];
loader:boolean=false;
@Input() searchedProduct:any;

constructor(private service : CommonService,private router:Router,private _prodService:ProductService ,private alertService:AlertService){

}

// success(message: string, title?: string, options?: any) {
//   this.alert('success', message, title, 'fa fa-check-circle', options);
// }
// error(message: string, title?: string, options?: any) {
//   this.alert('error', message, title, 'fa fa-exclamation-circle', options);
// }


ngOnInit(){
  scrollTo(0,0)
  this.fetchProductList();
}

fetchProductList(){
  this.loader=true;
  this.service.fetchAllProducts((res:any)=>{
    this.loader=false;
    res.forEach((item:any) => {
        item['quantity'] = 1;
    });
    this.products = res;
  })
}

showSingleProduct(prodId:any){
    this.router.navigate(["single-products",prodId])
}

addToCart(product:any){
  this._prodService.addToCart(product);
  this.alertService.alert("success","Item Added Into Cart", "Success", {displayDuration: 1000, pos: 'top'})
}

}