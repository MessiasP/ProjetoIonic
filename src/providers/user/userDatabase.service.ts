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

  public async createUpdateUser(userLogin: UserLogin, uid: string) {
    userLogin.password = null;
      return await this.alunoList.update(uid, userLogin);
  }

  // public delete(userLogin: UserLogin) {
  //   return this.aFDatabase.
  // }

}
