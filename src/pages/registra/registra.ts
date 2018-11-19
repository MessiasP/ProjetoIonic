import { FormBuilder } from "@angular/forms";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  AlertController
} from "ionic-angular";

import { Component } from "@angular/core";
import { UserLogin } from "./../Models/user.login.model";

import { UserService } from "../../providers/user/user.service";
import { UserDatabaseService } from "./../../providers/user/userDatabase.service";

@IonicPage()
@Component({
  selector: "page-registra",
  templateUrl: "registra.html"
})
export class RegistraPage {
  uid: string;
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

    // VER PORQUE AS VALIDAÇÕES N SAO PEGAS || TROCAR PARA FORMA DO PROFESSOR (GITHUB)
    this.userLogin.nome = null;
    this.userLogin.sobrenome = null;
    this.userLogin.email = null;
    this.userLogin.endereco = null;
    this.userLogin.cep = null;
    this.userLogin.cpf = null;
    this.userLogin.password = null;
  }

  onSubmit(): void {
    this.verificaForm();
    if (
      this.userLogin.nome != null &&
      this.userLogin.email != null &&
      this.userLogin.endereco != null &&
      this.passwordInvalid === false
    ) {
      return this.save();
    }
    return this.presentAlert();
  }

  save() {
    this.userService
      .createUser(this.userLogin)
      .then(sucess => {
        this.uid = sucess.user.uid;
        this.userDatabase.createUpdateUser(this.userLogin, this.uid);
        this.toast.create({
          message: `Cadastro realizado com sucesso!`,
          duration: 3000
        });
        this.navCtrl.setRoot("LoginPage");
      })
      .catch(fail => {
        this.showToast(fail.code);
        console.error("Erro nao tratado: ", fail);
      });
  }

  verificaForm() {
    if (this.passwordC === this.userLogin.password) {
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
    if (this.userLogin.email === null) {
      const alert = this.AlertCtrl.create({
        title: "Digite um Email!",
        subTitle: "Não pode ser vazio!",
        buttons: ["Voltar"]
      });
      alert.present();
    }
    if (this.userLogin.endereco === null) {
      const alert = this.AlertCtrl.create({
        title: "Endereço Inválido!",
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
