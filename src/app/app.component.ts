import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAdmin:boolean=false;
  title = 'Cartopia';

  constructor(){
    scroll(0,0);
  }

  ngOnInit(){
    scroll(0,0)
    window.location.pathname === "/admin" ? this.isAdmin=true : this.isAdmin = false; 
  }
}
