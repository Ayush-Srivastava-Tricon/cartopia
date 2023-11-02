import { Component } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchProduct:any='';
  searchedProduct:any='';
  categoryList:any=[];

constructor(private service:CommonService,private router:Router){

}

ngOnInit(){
  this.fetchAllCats();
}

fetchAllCats(){
  this.service.fetchAllCats((res:any)=>{
    this.categoryList = res;
    
  })
}

searchProducts(){
  this.searchedProduct = this.searchProduct;
}

showProduct(productName:any){
  this.router.navigate(["single-category",productName]);
}


}
