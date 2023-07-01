import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CommonService {

public navComp = new Subject();

baseUrl:any = "https://fakestoreapi.com/"

httpUrls:any={
  'fetchProducts':'products',
  'fetchCats':'products/categories',
  'fetchSingleProduct':'products',
  'fetchSpecificCatProducts':'products/category',

}

  constructor(private http:HttpClient) { }

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

}
