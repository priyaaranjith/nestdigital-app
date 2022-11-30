import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
  constructor(private route: Router){}
  username=""
  password=""

  readValues=()=>{
    if(this.username=="admin"&&this.password=="nestdigital"){
      this.route.navigate(["/viewallcourse"])
    }else{
      alert("Not a valid credentials")
    }
  }
}
