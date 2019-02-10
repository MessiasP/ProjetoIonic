import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

import { UserLogin } from "../../model/user/user.login.model";

@Injectable()
export class UserService {
  
  constructor(private angularFireAuth: AngularFireAuth) {}

  signIn(userLogin: UserLogin) {
    return this.angularFireAuth.auth
      .signInWithEmailAndPassword(userLogin.email, userLogin.password);
  }

  createUser(userLogin: UserLogin) {
    return this.angularFireAuth.auth
      .createUserWithEmailAndPassword(userLogin.email, userLogin.password);
  }

  recoveryAccount(userLogin: UserLogin) {
    return this.angularFireAuth.auth
      .sendPasswordResetEmail(userLogin.email);
  }

  deleteUser(uid: string) {
    return this.angularFireAuth;
  }
}
