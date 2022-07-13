import { Component, OnInit } from '@angular/core';
import { UserinfoComponent } from '../userinfo.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginButton:String;

  constructor() { 
    this.loginButton = UserinfoComponent.loginButton;
  }

  ngOnInit(): void {
  }

}
