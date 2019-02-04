import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  ToastController,
  AlertController
} from "ionic-angular";

import { UserLogin } from "../../model/user/user.login.model";
import { UserService } from "../../providers/user/user.service";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  userLogin: UserLogin;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private userService: UserService,
    private toast: ToastController,
    private AlertCtrl: AlertController
  ) {
    this.userLogin = new UserLogin();

    this.userLogin.login = null;
    this.userLogin.password = null;
  }

  authLogin() {
    const uri = 'localhost:8100'
    // if (this.userLogin.login != null && this.userLogin.password != null) {
    //   return this.userService
    //     .signIn(this.userLogin)
    //     .then(sucess => {
    //       this.navCtrl.setRoot("BuscaPage");
    //     })
    //     .catch(fail => {
    //       this.showToast(fail.code);
    //     });
    // }
    this.userService.signIn(this.userLogin).then(response => console.log("sucess", response))    
    .then(contents => console.log('midlle', contents))
    .catch(() => console.log("Can’t access " , uri , " response. Blocked by browser?"));
    
    // return this.presentAlert();
  }

  private showToast(code: string): void {
    if (code === "auth/invalid-email") {
      this.toast
        .create({
          message: `Digite um usuario valido!`,
          duration: 5000
        })
        .present();
    }
    if (code === "auth/wrong-password") {
      this.toast
        .create({
          message: `Senha invalida!`,
          duration: 5000
        })
        .present();
    }
    if (code === "auth/user-not-found") {
      this.toast
        .create({
          message: `Usuario não cadastrado!`,
          duration: 5000
        })
        .present();
    }
  }

  onRegistro(): void {
    this.navCtrl.push("RegistraPage");
    // this.menuCtrl.enable(true);//_____________________TIRAR ISSO AQUI__________________________________
  }

  presentAlert() {
    if (this.userLogin.login === null) {
      const alert = this.AlertCtrl.create({
        title: "Digite um Email!",
        buttons: ["Voltar"]
      });
      alert.present();
    }
    if (this.userLogin.password === null) {
      const alert = this.AlertCtrl.create({
        title: "Digite uma Senha!",
        buttons: ["Voltar"]
      });
      alert.present();
    }
  }
}
