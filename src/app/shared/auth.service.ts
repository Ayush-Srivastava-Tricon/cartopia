import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth"
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth,private router:Router) { }

  login(params:any,callback:any){
    this.fireAuth.signInWithEmailAndPassword(params.email,params.password).then((data:any)=>{callback(data)});
  }

  register(params:any,callback:any){
    this.fireAuth.createUserWithEmailAndPassword(params.email,params.password).then((data:any)=>{callback(data)});
  }

}
