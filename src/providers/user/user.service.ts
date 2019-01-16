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

  signIn(userLogin: UserLogin) {
    this.http.post(`${this.configURL}/login`, userLogin).subscribe((res: any) => {
      localStorage.setItem('token', res.token);
    });
  }
  
  async create(userLogin: UserLogin) {
    console.log("BATEU SERVICE!!", userLogin);
    return await this.http.post(`${this.apiURL}`, userLogin).subscribe(res => {
      console.log("RESSERVICE", res);
      
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
