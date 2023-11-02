import { Component } from '@angular/core';
import { CommonService } from '../shared/common.service';
import { AlertService } from '../shared/alert.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  productName:any='Fashion';
  fileName:any;
  imageSrc:any;
  addProductConfig:any={};
  imageFormData:any = new FormData();

  constructor(private service:CommonService,private alert:AlertService){}

  ngOnInit(){
    this.productName ='Fashion';
    this.addProductConfig['category'] =  this.productName;
    this.getAllProduct();
  }

  changeCategory(prodName:any){
    this.productName = prodName;
    this.addProductConfig['category'] = prodName;
  }


  selectImg(event:any){
      let file = event.target.files[0];

     this.imageSrc = URL.createObjectURL(file);
      
     this.imageFormData = new FormData();
     this.imageFormData.append("image",file) ;
  }

  uploadImage(){
    this.service.addProductImage(this.imageFormData,(res:any)=>{
      if(res.status){
        this.addProductConfig['image'] = res.data;
        this.addProduct();
      }
    })
  }

  addProduct(){

    let isAnyFieldEmpty:boolean = this.isEmptyField();
    if(!isAnyFieldEmpty){
    this.service.addProduct(this.addProductConfig,(res:any)=>{
      if(res.status){
        this.addProductConfig={};
        this.alert.alert("success",res.message, "Success", {displayDuration: 2000, pos: 'top'});
      } else{
        this.alert.alert("error",res.message, "error", {displayDuration: 2000, pos: 'top'})
      }
    })
   } else{
    this.alert.alert("error","All Fields Are Required", "error", {displayDuration: 2000, pos: 'top'})
   }

  }

  isEmptyField(){

    if( Object.keys(this.addProductConfig).length === 0){
      return true;
    } 
    return false;
  }

  getAllProduct(){
    this.service.getAllProducts((res:any)=>{
      if(res){
        console.log(res);
      }
    })
  }

}
