import { Injectable } from "@angular/core";

import { UserLogin } from '../../pages/Models/user.login.model';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserDatabase {

  private alunoList = this.aFDatabase.list<UserLogin>('/Users');

  constructor(
    private aFDatabase: AngularFireDatabase,
  ){}

  public findAll() {
    return this.aFDatabase;
  }

  public findOne(userLogin: UserLogin) {
    return this.aFDatabase;
  }

  public createUpdateUser(userLogin: UserLogin) {
    console.log("SERVICE DATABASE, OBJETO: ", userLogin);

    // if (userLogin.uid != null) {
    //   console.log("SERVICE DATABASE, TEM ID!!");

    //   return this.alunoList.update(userLogin.uid, userLogin);
    // }
    console.log("SERVICE DATABASE, NÃO TEM ID!!");
    return this.alunoList.push(userLogin);
  }

  // public delete(userLogin: UserLogin) {
  //   return this.aFDatabase.
  // }

}
