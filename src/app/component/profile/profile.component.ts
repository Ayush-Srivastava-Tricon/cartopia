import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  userDetail:any={};
  imgPath:any;
  downloadURL: any|Observable<string>;
  fb:any;
  constructor(private auth:AuthService){}

  login(){
    let params:any = {
      'email':this.userDetail.email,
      'password':this.userDetail.password,
    }
    this.auth.login(params,(res:any)=>{
      console.log(res);
      
    })
  }

  register(){
    let params:any = {
      'email':this.userDetail.email,
      'password':this.userDetail.password,
    }
    this.auth.register(params,(res:any)=>{
      console.log(res);
      
    })
  }

  selectImg(event:any){
    
  }

  uploadImg(){

  }

}
