import { Component } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { AlertService } from '../shared/alert.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {

  singleCateogry:any=[];
  loader:boolean=false;
  constructor(private _service:CommonService,private route:ActivatedRoute,private _prodService:ProductService ,private alertService:AlertService){}


  ngOnInit(){ 
    this.route.paramMap.subscribe((code:any)=>{
      this.getSingleCatList(code.params.name);
    })
  }

  getSingleCatList(catName:any){
    this.loader=true;
    this.singleCateogry=[];
    this._service.fetchSingleCatProducts(catName,(res:any)=>{
      this.loader=false;
      this.singleCateogry = res;
    })
  }

  addToCart(product:any){
    console.log(product);
    
    this._prodService.addToCart(product);
    this.alertService.alert("success","Item Added Into Cart", "Success", {displayDuration: 1000, pos: 'top'})
  }
}