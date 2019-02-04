import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

import { UserLogin } from "../../model/user/user.login.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {
  
  configURL = 'http://localhost:3000/api'
  apiURL = `${this.configURL}/user`

  constructor(
    private http: HttpClient) 
  {}

  async signIn(userLogin: UserLogin) {
    
    return  await this.http.post(`${this.configURL}/login`, userLogin).subscribe(data => {
      console.log(data);
    });
  }
  
  async create(userLogin: UserLogin) {
    console.log("BATEU SERVICE!!", userLogin);
    return await this.http.post(`${this.apiURL}`, userLogin).subscribe(data => {
      console.log("RESSERVICE", data);
      
    });
  }

  recoveryAccount() {
    let localHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    
    this.http.get(this.apiURL, {headers: localHeaders}).subscribe(res => {
      console.log(res)
    })
    // return this.angularFireAuth.auth
    //   .sendPasswordResetEmail(userLogin.login);
  }

  deleteUser(uid: string) {
    // return this.angularFireAuth;
  }
}
