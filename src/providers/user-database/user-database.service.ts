import { Injectable } from "@angular/core";

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";
import { UserLogin } from "../../model/user/user.login.model";


@Injectable()
export class UserDatabaseService {

  private userList = this.aFDatabase.list<UserLogin>("/Users");

  private uid: string;

  constructor(
    private aFDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,) {
  }

  public findAll() {
    return this.aFDatabase;
  }

  public findOne(uid: string) {
    return this.aFDatabase;
  }

  public createUser( userLogin: UserLogin) {
    console.log("Service, Obj ", userLogin);
    userLogin.password = null;
    return this.userList.push(userLogin);
  }

  public delete(uid: string) {
    return this.aFDatabase.object(uid).remove();
  }

  public getUid() {
    this.afAuth.user.subscribe(res => {
      this.uid = res.uid;
      return this.uid;
    })
  }
}
