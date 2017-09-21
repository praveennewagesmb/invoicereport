import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserauthService } from '../userauth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: UserauthService) { 
    console.log('Login Component')
  }

  ngOnInit() {
  }
  loginuser(e){
    e.preventDefault();
    console.log(e, this.user);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
    console.log(username, password);
    if(username=='admin@gotrashy.com' && password=='admin'){
      this.user.setUserLoggedIn();
      this.router.navigate(['/Listing']);
      console.log(e, this.user);
    }
  }
}
