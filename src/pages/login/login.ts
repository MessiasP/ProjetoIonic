import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { UserLogin } from './user.login.model';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userLogin: UserLogin;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private angularFireAuth: AngularFireAuth,
    private toast: ToastController) {
      this.userLogin = new UserLogin();
  }

  authLogin() {

    // this.angularFireAuth.authState.subscribe( result => {
    //   this.toast.create({
    //     message: 'Bem vindo ao APP_NAME',
    //     duration: 3000
    //   }).present();
    // });

    console.log('OBJ: ', this.userLogin);
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.userLogin.email, this.userLogin.senha).then( sucess => {
      console.log(" FOII: ", sucess );
      this.navCtrl.setRoot('BuscaPage');
      }).catch(fail => {
        console.log("NAO FOI: ", fail);
      })
  }

  onRegistro():void {
    this.navCtrl.push('RegistraPage');
   // this.menuCtrl.enable(true);
  }

}
