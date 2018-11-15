import { UserLogin } from './../login/user.login.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registra',
  templateUrl: 'registra.html',
})
export class RegistraPage {
  user = new UserLogin();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private angularFireAuth: AngularFireAuth) {
  }

  authCreate() {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.senha).then(sucess => {
      console.log('foi', sucess)
    }).catch(fail => {
      console.log('fail', fail);
    })
  }

  onLogin():void {
    this.navCtrl.setRoot('LoginPage');
  }

}
