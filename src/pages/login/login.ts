import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';

import { UserLogin } from '../Models/user.login.model';
import { UserService } from '../../providers/user/user.service';

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
    private userService: UserService,
    private toast: ToastController) {

      this.userLogin = new UserLogin();

    }

  authLogin() {

    console.log('obj p/ salar: ', this.userLogin);

  this.userService.signIn(this.userLogin).then( sucess => {
      console.log(" FOII: ", sucess );
      this.navCtrl.setRoot('BuscaPage');
      }).catch(fail => {
        console.log("NAO FOI: ", fail.code);
        this.showToast(fail.code);

      })
  }

  private showToast(code: string): void {
    console.log(" code: ", code );
    if (code === 'auth/invalid-email'){
      this.toast.create({
        message: `Digite um usuario valido!`,
        duration: 5000
      }).present()
    }

  }

  onRegistro():void {
    this.navCtrl.push('RegistraPage');
   // this.menuCtrl.enable(true);
  }

}
