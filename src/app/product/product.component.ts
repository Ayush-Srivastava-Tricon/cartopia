import { Component, Input } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

products:any=[];
loader:boolean=false;
@Input() searchedProduct:any;

constructor(private service : CommonService,private router:Router,private _prodService:ProductService){

}

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
}

}
