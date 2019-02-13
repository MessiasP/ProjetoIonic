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
import { storage } from "firebase";
import {TokenService} from "../../providers/token/token.service";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

  userLogin: UserLogin;

  invalidLogin: boolean;
  invalidPassword: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private userService: UserService,
    private toast: ToastController,
    private AlertCtrl: AlertController,
    private tokenService: TokenService
  ) {
    this.userLogin = new UserLogin();
  }

  /**
   * Metodo acionado quando o botao Login é clicado
   * EU acho q nunca cai no error, TESTAR
   */
  authLogin() {
    this.initVariables();
    if (this.isValidFields()) {
      this.userService.signIn(this.userLogin).subscribe((res:any) => {
        // res vai ter: { token: abcd, user: { dados do usuario, senha, email, etc } }
  
        // Seta o token pelo metodo: set token()
        this.tokenService.token = res.token;
        // this.navCtrl.setRoot("BuscaPage");
      }, (err:any) => {
        this.userLogin.login = null;
        this.userLogin.password = null;

        this.isValidFields();
        console.error('HEREERROR:\n', err.code)
      
      });
    }
  }

  initVariables() {
    this.invalidLogin = false;
    this.invalidPassword = false;
  }
  
  isValidFields() {
    if (!Boolean(this.userLogin.login)) {
      this.invalidLogin = true;
      this.toast.create({
        message: `Usuario invalida!`,
        duration: 5000
      }).present();
    }
    if (!Boolean(this.userLogin.password)) {
      this.invalidPassword = true;
      this.toast.create({
          message: `Senha invalida!`,
          duration: 5000
        }).present();
    }

    const result = this.invalidLogin || this.invalidPassword;
    
    return result;
  }

  onRegistro(): void {
    // this.userService.recoveryAccount();
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
