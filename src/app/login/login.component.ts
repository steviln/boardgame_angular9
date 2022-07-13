import { Component, OnInit } from '@angular/core';
import { Login } from '../data/login';
import { SessionService } from '../service/session.service';
import { UserinfoComponent } from '../userinfo.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    brukernavn:String;
    passord:String;
    errorMessage:String;
    buttonText:String;
    loggin:SessionService;
    loginStatus:Boolean;

    

  constructor(private _sessionservice: SessionService, private router: Router) { 
    this.errorMessage = "";
    this.buttonText = "Logg Inn";
    this.determineLoginStatus();

  }

  ngOnInit(): void {
    this.determineLoginStatus();
  }
  
  determineLoginStatus(): void {
    if(UserinfoComponent.logged){
        this.loginStatus = false;
    }else{
        this.loginStatus = true;
    }
  }
  
  post(){
     
     let login = <Login>{userID:0,brukernavn:this.brukernavn,password:this.passord,errormessage:this.errorMessage,status:0};
     this._sessionservice.postEditPlayer(login,this);
     
  }
  
  checkLogin(data){
      if(data.userID && data.userID > 0){
          UserinfoComponent.userID = data.userID;
          UserinfoComponent.logged = true;
          UserinfoComponent.status = data.status;
          this.errorMessage = "";
          this.determineLoginStatus();
          this.router.navigate(['/']);
      }else{
          this.errorMessage = data.errormessage;
      }
  }

}
