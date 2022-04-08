import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CheckClass {

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
  }

   logoutAdmin() {
    if (localStorage.getItem('tokenAdmin')){
      localStorage.removeItem('tokenAdmin');
    }
      
  }
}