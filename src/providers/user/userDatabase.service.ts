import { Injectable } from "@angular/core";

import { AngularFireDatabase } from 'angularfire2/database';

import { UserLogin } from '../../pages/Models/user.login.model';

@Injectable()
export class UserDatabaseService {

  private userList = this.aFDatabase.list<UserLogin>('/Users');

  constructor(private aFDatabase: AngularFireDatabase){}

  public findAll() {
    return this.aFDatabase;
  }

  public findOne(uid: string) {
    return this.aFDatabase;
  }

  public async createUpdateUser(userLogin: UserLogin, uid: string) {
    userLogin.password = null;
      return await this.userList.update(uid, userLogin);
  }

  public delete(uid: string) {
    return this.aFDatabase.object(uid).remove();
  }

}
