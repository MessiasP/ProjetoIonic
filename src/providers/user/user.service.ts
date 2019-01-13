import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

import { UserLogin } from "../../model/user/user.login.model";
import { HTTP } from "@ionic-native/http";
import { HttpClient } from "@angular/common/http";
import { Http } from "@angular/http";

@Injectable()
export class UserService {
  
  configURL = 'http://localhost:3000/api'
  apiURL = `${this.configURL}/user`

  constructor(
    private http: HttpClient) 
  {}

  async signIn(userLogin: UserLogin) {
    
    return  await this.http.post(this.apiURL, userLogin);
  }
  
  async create(userLogin: UserLogin) {
    console.log("BATEU SERVICE!!", userLogin);
    return await this.http.post(`${this.apiURL}`, userLogin).subscribe(res => {
      console.log("RESSERVICE", res);
      
    });
  }

  recoveryAccount(userLogin: UserLogin) {
    // return this.angularFireAuth.auth
    //   .sendPasswordResetEmail(userLogin.login);
  }

  deleteUser(uid: string) {
    // return this.angularFireAuth;
  }
}
