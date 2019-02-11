import { Injectable } from "@angular/core";

import { AngularFireAuth } from 'angularfire2/auth';
import { UserLogin } from "../../model/user/user.login.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { storage } from "firebase";



@Injectable()
export class UserDatabaseService {
  
  configURL = 'http://localhost:3000/api';
  apiURL = `${this.configURL}/user`;

  private uid: string;

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient,
    ) {}

  async findAll() {
    let localHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))  

    return await this.http.get(`${this.apiURL}`, {headers: localHeaders}).subscribe(data => {
      console.log('searhAll', data);
      
    });
  }

  async findOne(uid: string) {
    return await this.http.get(`${this.apiURL}/:uid`).subscribe(data => {
      console.log('searhOne', data);
      
    });
  }

  async create(userLogin: UserLogin) {
    console.log("BATEU SERVICE!!", userLogin);
    return await this.http.post(`${this.apiURL}`, userLogin).subscribe(data => {
      console.log("RESSERVICE", data);
    });

  }

  async delete(uid: string) {
    return await this.http.delete(`${this.apiURL}/:uid`).subscribe(data => {
      console.log('delete', data);
      
    });
  }

  public getUid() {
    this.afAuth.user.subscribe(res => {
      this.uid = res.uid;
      return this.uid;
    })
  }
}
