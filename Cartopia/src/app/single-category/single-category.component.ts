import { Component } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {

  singleCateogry:any=[];
  loader:boolean=false;
  constructor(private _service:CommonService,private route:ActivatedRoute){}


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
}