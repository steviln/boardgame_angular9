import { Component, OnInit } from '@angular/core';
import { GamesService } from '../service/games.service';
import { CompanyResult } from '../data/companyresult';
import { Company } from '../data/company';
import { UserinfoComponent } from '../userinfo.component';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [GamesService]
})
export class CompaniesComponent implements OnInit {
  companies: Array<CompanyResult>;
  company: Company;
  gameservice: GamesService;
  loginStatus:Boolean;
  userID:Number;
  status:Number;

  constructor(private _gameservice: GamesService) { 
      this.company = null;
      this.gameservice = _gameservice;
      this.gameservice.getCompanies().subscribe(data => this.assignCompanies(data) );  
  }
  
  assignCompany(selectCompany:Company){
    if(selectCompany === null){
        this.company = {id:null,navn:""};
    }else{
        this.company = selectCompany;
    }
  }
  
  assignCompanies(data){
      this.companies = data;
  }
  
    assignCompaniesAfter(data){
      this.company = null;
      this.assignCompanies(data);
  }
  
  post(){
      this.gameservice.postCompany(this.company, this);
  }

  ngOnInit(): void {
    this.determineLoginStatus();
  }
  
  determineLoginStatus(): void {
      
    if(UserinfoComponent.logged){
        this.loginStatus = false;
        this.userID = UserinfoComponent.userID;
        this.status = UserinfoComponent.status;
    }else{
        this.loginStatus = true; 
        this.userID = 0;
        this.status = 0;       
    }
  }

}
