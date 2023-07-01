import { Component, Input } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

products:any=[];
loader:boolean=false;
@Input() searchedProduct:any;

constructor(private service : CommonService,private router:Router){

}

ngOnInit(){
  this.fetchProductList();
}

fetchProductList(){
  this.loader=true;
  this.service.fetchAllProducts((res:any)=>{
    this.loader=false;
    this.products = res;
  })
}

showSingleProduct(prodId:any){
    this.router.navigate(["single-products",prodId])
}

}
