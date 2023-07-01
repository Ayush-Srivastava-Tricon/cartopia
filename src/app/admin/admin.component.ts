import { Component } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  productName:any='Grocery';
  fileName:any;
  imageSrc:any;
  constructor(private service:CommonService){}

  addProdcuts(prodName:any){
    this.productName = prodName;
  }
}
