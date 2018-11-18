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

  this.userService.signIn(this.userLogin).then( sucess => {
      this.navCtrl.setRoot('BuscaPage');
      }).catch(fail => {
        this.showToast(fail.code);

      })
  }

  private showToast(code: string): void {
    if (code === 'auth/invalid-email') {
      this.toast.create({
        message: `Digite um usuario valido!`,
        duration: 5000
      }).present()
    }
    if (code === 'auth/wrong-password') {
      this.toast.create({
        message: `Senha invalida!`,
        duration: 5000
      }).present()
    }
    if (code === 'auth/user-not-found') {
      this.toast.create({
        message: `Usuario não cadastrado!`,
        duration: 5000
      }).present()
    }
  }

  onRegistro():void {
    this.navCtrl.push('RegistraPage');
   // this.menuCtrl.enable(true);//_____________________TIRAR ISSO AQUI__________________________________
  }

}
