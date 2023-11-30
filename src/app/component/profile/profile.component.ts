import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import {AngularFireStorage} from "@angular/fire/compat/storage"
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
  constructor(private auth:AuthService,private storage:AngularFireStorage){}

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
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `productImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`productImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe((url:any) => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }


  uploadImg(){

  }

}
