import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

import { UserLogin } from "../../model/user/user.login.model";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class UserService {
  
  constructor(private angularFireAuth: AngularFireAuth) {}

  signIn(userLogin: UserLogin) {
    var retorno = this.angularFireAuth.auth
      .signInWithEmailAndPassword(userLogin.login, userLogin.password);
      // new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.setItem('token',))
      return retorno;
  }

  createUser(userLogin: UserLogin) {
    return this.angularFireAuth.auth
      .createUserWithEmailAndPassword(userLogin.login, userLogin.password);
  }

  recoveryAccount(userLogin: UserLogin) {
    return this.angularFireAuth.auth
      .sendPasswordResetEmail(userLogin.login);
  }

  deleteUser(uid: string) {
    return this.angularFireAuth;
  }
}
