import { Component } from '@angular/core';
import { AlertService } from 'src/app/shared/alert.service';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  cartList:any=[];
  hasCartItem:boolean=false;

  constructor(private _prodService:ProductService,private alertService:AlertService){}

  ngOnInit(){
    this._prodService.fetchCartProduct((res:any)=>{
      console.log(res);
      
      this.cartList = res;
      this.checkCartHasItem(res);
     
    })
  }

  checkCartHasItem(data:any){
    this.hasCartItem = data ? data.length>0 ? true :  false : false;
  }

  deleteItem(itemId:any){

    this.cartList.find((item:any,idx:any)=>{
        if(item && item.id == itemId){
          this.cartList.splice(idx,1);
        }
    })
    localStorage.setItem("cartList",JSON.stringify(this.cartList));
    this.checkCartHasItem(this.cartList);
    setTimeout(()=>{
      this.hasCartItem ?  '' :  scrollTo(0,0);
    },0)
    this.alertService.alert("error","Item Deleted From the Cart", "Success", {displayDuration: 1000, pos: 'top'})
    
  }

}
