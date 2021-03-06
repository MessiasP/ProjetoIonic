import { FormBuilder } from "@angular/forms";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  AlertController
} from "ionic-angular";

import { UserDatabaseService } from './../../providers/user-database/user-database.service';

import { UserService } from "../../providers/user/user.service";
import { UserLogin } from '../../model/user/user.login.model';

@IonicPage()
@Component({
  selector: "page-registra",
  templateUrl: "registra.html"
})
export class RegistraPage {

  uid: String;
  userLogin: UserLogin;
  passwordC: string;

  passwordInvalid: boolean;

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserService,
    private userDatabase: UserDatabaseService,
    private toast: ToastController,
    private AlertCtrl: AlertController,
  ) {

    this.passwordInvalid = true;

    this.userLogin = new UserLogin();

    this.uid = null;

    // VER PORQUE AS VALIDAÇÕES N SAO PEGAS || TROCAR PARA FORMA DO PROFESSOR (GITHUB)
    this.userLogin.nome = null;
    this.userLogin.sobrenome = null;
    this.userLogin.login = null;
    this.userLogin.cpf = null;
    this.userLogin.password = null;
  }

  onSubmit(): void {
    this.verificaForm();
    if (
      this.userLogin.nome != null &&
      this.userLogin.login != null &&
      this.passwordInvalid === false
    ) {
      return this.save();
    }
    return this.presentAlert();
  }

  /**
   * De novo, eu acho q NAO TA ENTRANDO NO ERROR
   */
  save() {
    this.userService.createUser(this.userLogin).subscribe(res => {
      this.toast.create({
        message: `Cadastro realizado com sucesso!`,
        duration: 3000
      });
      this.navCtrl.setRoot("LoginPage");
    }, (error1: any) => {
      console.log("is here: ", error1);
      
      this.toast.create({
        message: `Não foi possivel criar usuario!`,
        duration: 3000
      });
      console.error('ERROR:\n', error1)
    });
  }

  verificaForm() {
    if (this.passwordC === this.userLogin.password && this.userLogin.password.length < 6) {
      return this.passwordInvalid = false;
    }
  }

  private showToast(code: string): void {
    if (code === "auth/invalid-email") {
      this.toast
        .create({
          message: `Digite um E-mail valido!`,
          duration: 5000
        })
        .present();
    }
    if (code === "auth/weak-password") {
      this.toast
        .create({
          message: `Senha Invalida, minimo de 6 dígitos!`,
          duration: 5000
        })
        .present();
    }
    if (code === "auth/email-already-in-use") {
      this.toast
        .create({
          message: `Já existe uma conta com esse E-mail!`,
          duration: 5000
        })
        .present();
    }
    if (code === "auth/argument-error") {
      const alert = this.AlertCtrl.create({
        title: "Nome Inváldo!",
        subTitle: "Não pode ser vazio!",
        buttons: ["Voltar"]
      });
      alert.present();
    }

  }

  onLogin(): void {
    this.navCtrl.setRoot("LoginPage");
  }

  presentAlert() {
    if (this.userLogin.nome === null) {
      const alert = this.AlertCtrl.create({
        title: "Nome Inváldo!",
        subTitle: "Não pode ser vazio!",
        buttons: ["Voltar"]
      });
      alert.present();
    }
    if (this.userLogin.login === null) {
      const alert = this.AlertCtrl.create({
        title: "Digite um Email!",
        subTitle: "Não pode ser vazio!",
        buttons: ["Voltar"]
      });
      alert.present();
    }
    if (this.passwordInvalid === true) {
      const alert = this.AlertCtrl.create({
        title: "Senhas não conferem!",
        subTitle: "Digite novamente!",
        buttons: ["Voltar"]
      });
      alert.present();
    }
  }
}
