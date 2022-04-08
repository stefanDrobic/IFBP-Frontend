import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckClass } from 'src/app/model/CheckClass';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, public check:CheckClass) { }

  public username: string = '';
  public password: string = '';
  msg = "";

  ngOnInit(): void {
  }

  login() {

    if (!this.check.isAdmin() && this.username == "admin" && this.password == "adminifbp") {
      this.userService.loginAdmin(this.username, this.password).subscribe(resp => {
        localStorage.setItem("tokenAdmin", resp.token)
        this.router.navigate(['/event/list']);
      },
        error => { console.log("login error"); this.msg = "Plase enter valid username or password"; });

    }
    else if(!this.check.isUser()){
      this.userService.login(this.username, this.password).subscribe(resp => {
        localStorage.setItem("token", resp.token)
        this.router.navigate(['/event/list']);
      },
        error => { console.log("login error"); this.msg = "Plase enter valid username or password"; });
    }
    else
      this.msg = "You are already logged in."
    
  }




}
