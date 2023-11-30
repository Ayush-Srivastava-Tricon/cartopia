import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class CommonService {

public navComp = new Subject();

baseUrl:any = "https://fakestoreapi.com/";

newBaseUrl:any="http://localhost:3000/"

httpUrls:any={
  'fetchProducts':'products',
  'fetchCats':'products/categories',
  'fetchSingleProduct':'products',
  'fetchSpecificCatProducts':'products/category',


  'addProduct':'addProduct',
  'getProduct':'getProduct',
  'uploadImage':'uploadImage',


}

  constructor(private http:HttpClient) {

   }

  subscrieToNavComp(data:any){

    this.navComp.next(data);

  }

  fetchAllCats(callback:any){
    return this.http.get(this.baseUrl+this.httpUrls['fetchCats'],callback).subscribe((data:any)=>callback(<any>data));
  }

  fetchAllProducts(callback:any){
    return this.http.get(this.baseUrl+this.httpUrls['fetchProducts'],callback).subscribe((data:any)=>{
      callback(<any>data)});
  }

  fetchSingleProducts(prodId:any,callback:any){
    return this.http.get(this.baseUrl+this.httpUrls['fetchProducts']+"/"+prodId,callback).subscribe((data:any)=>{
      callback(<any>data)});
  }

  fetchSingleCatProducts(catName:any,callback:any){
    return this.http.get(this.baseUrl+this.httpUrls['fetchSpecificCatProducts']+"/"+catName,callback).subscribe((data:any)=>{
      callback(<any>data)});
  }

  addProduct(params:any,callback:any){
    return this.http.post(this.newBaseUrl+this.httpUrls['addProduct'],params).subscribe((data:any)=>{
      callback(<any>data)});
  }

  addProductImage(params:any,callback:any){
    return this.http.post(this.newBaseUrl+this.httpUrls['uploadImage'],params).subscribe((data:any)=>{
      callback(<any>data)});
  }

  getAllProducts(callback:any){
    return this.http.get(this.newBaseUrl+this.httpUrls['getProduct']).subscribe((data:any)=>{
      callback(<any>data)});
  }

}
