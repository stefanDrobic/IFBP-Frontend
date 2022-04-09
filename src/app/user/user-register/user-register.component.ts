import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckClass } from 'src/app/model/CheckClass';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userService: UserService,private router: Router, public check:CheckClass) { }

  public username: string = '';
  public password: string = '';
  msg = "";

  ngOnInit(): void {
  }

  register() {
    if(!this.check.isUser())
    this.userService.register(this.username, this.password).subscribe(data =>{
      console.log("userlogin");
      this.router.navigate(['/login']);
    },
    error => {console.log("Regitration error"); this.msg = "User alredy exist."; })
    else
      this.msg = "You need to logout to be able to create new account."
  }


}
