import { Injectable } from "@angular/core";

import { UserLogin } from "../../model/user/user.login.model";
import {HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
/**
 * Essa classa devia se chamar AuthService
 */
export class UserService {
  rootUrl= 'http://localhost:3000/api';
  url = `${this.rootUrl}/user`;
  constructor(private http: HttpClient) {}

  signIn(userLogin: UserLogin) {
    // Simplismente faz um post com os dados para o back end
    return this.http.post(`${this.rootUrl}/login`, userLogin)
  }

  createUser(userLogin: UserLogin): Observable<UserLogin> {
    // Cria o usuario novo
    return this.http.post(this.url, userLogin)
  }

  recoveryAccount(userLogin: UserLogin) {
    // return this.angularFireAuth.auth
    //   .sendPasswordResetEmail(userLogin.login);
  }

  deleteUser(uid: string) {
    // return this.angularFireAuth;
  }
}
