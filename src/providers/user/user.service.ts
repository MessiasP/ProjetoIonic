import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable,  } from '@angular/core';
import { UserLogin } from '../../pages/Models/user.login.model';


@Injectable()
export class UserService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    ) {}


  signIn(userLogin: UserLogin) {
    console.log('OBJ: ', userLogin);
    return this.angularFireAuth.auth.signInWithEmailAndPassword( userLogin.email, userLogin.password);
  }

  createUser(userLogin: UserLogin) {
   return this.angularFireAuth.auth.createUserWithEmailAndPassword(userLogin.email, userLogin.password);
  }


}
