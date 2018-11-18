import { Injectable,  } from '@angular/core';

import { UserLogin } from '../../pages/Models/user.login.model';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    ) {}


  signIn(userLogin: UserLogin) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword( userLogin.email, userLogin.password);
  }

  createUser(userLogin: UserLogin) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(userLogin.email, userLogin.password);

  }

  recoveryAccount(userLogin: UserLogin){
    return this.angularFireAuth.auth.sendPasswordResetEmail(userLogin.email);
  }

  deleteUser(userLogin: UserLogin) {
    // return this.angularFireAuth
  }


}
