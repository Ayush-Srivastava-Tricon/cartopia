import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartList:any=[];

  constructor() { }

  addToCart(product:any){
    let localCart:any= JSON.parse(<any>localStorage.getItem("cartList"));
    if(localCart){
      let isItemExist:any = localCart.some((item:any)=>item.id == product.id);
      if(!isItemExist){
        this.cartList.push(product);
        localStorage.setItem("cartList",JSON.stringify(this.cartList));
      } else{
            this.cartList.find((e:any)=>{
              e.quantity += 1; 
            })
            localStorage.setItem("cartList",JSON.stringify(this.cartList));
      }
    } else{
      this.cartList.push(product);
      localStorage.setItem("cartList",JSON.stringify(this.cartList));
    }
    

  } 

  fetchCartProduct(callback:any){
    let localCart:any= JSON.parse(<any>localStorage.getItem("cartList"));
    return callback(localCart);
  }
}
