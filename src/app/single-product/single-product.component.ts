import { Component } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {

  product:any={};

  constructor(private _service:CommonService,private route:ActivatedRoute){}


  ngOnInit(){
    this.route.paramMap.subscribe((code:any)=>{
      this.getProductDetails(code.params.id);
    })
  }

  getProductDetails(prodId:any){
    this._service.fetchSingleProducts(prodId,(res:any)=>{
      this.product = res;
    })
  }
}
