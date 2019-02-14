import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  ToastController,
} from "ionic-angular";

import { UserLogin } from "../../model/user/user.login.model";
import { UserService } from "../../providers/user/user.service";
import { TokenService } from "../../providers/token/token.service";

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
    private tokenService: TokenService
    ) { this.userLogin = new UserLogin(); }

  /**
   * Metodo acionado quando o botao Login é clicado
   * EU acho q nunca cai no error, TESTAR
   */
  authLogin() {
    if (!this.userLogin.login || !this.userLogin.password) return this.isValidFields('nullFields')
    this.userService.signIn(this.userLogin).subscribe((res: any) => {
      this.tokenService.token = res.token;
      this.navCtrl.setRoot("BuscaPage");
    }, (err: any) => {
      const { error } = err.error;
      console.error('HEREERROR:\n', error)
      this.isValidFields(error);

    });
  }


  isValidFields(error) {
    switch (error) {
      case 'User not found':
        this.toast.create({
          message: `Usuario invalido!`,
          duration: 5000
        }).present();
        break;
      case 'Invalid Password':
        this.toast.create({
          message: `Senha invalida!`,
          duration: 5000
        }).present();
        break;
      case 'nullFields':
        this.toast.create({
          message: `Preencha os todos campos!`,
          duration: 5000
        }).present();
        break;
    }
  }

  onRegistro(): void {
    // this.userService.recoveryAccount();
    this.navCtrl.push("RegistraPage");
    // this.menuCtrl.enable(true);//_____________________TIRAR ISSO AQUI__________________________________
  }
}
