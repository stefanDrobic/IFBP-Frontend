import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CheckClass {

  public username:string;

  setUsername(){
    if(sessionStorage.getItem("username"))
      this.username = sessionStorage.getItem("username");

  }

  getUsername(){
    return this.username;
  }

   isAdmin(){
    if (localStorage.getItem('tokenAdmin')){
      return true;
    }
    return false;
  }
  
  isUser() {
    if (localStorage.getItem('token'))
      return true;
    return false;
  }

  logoutUser() {
    if (localStorage.getItem('token')){
      localStorage.removeItem('token')
      console.log("token is removed");
    }
    if(sessionStorage.getItem("username"))
      sessionStorage.removeItem("username");
  }

   logoutAdmin() {
    if (localStorage.getItem('tokenAdmin')){
      localStorage.removeItem('tokenAdmin');
    }
      
  }
}