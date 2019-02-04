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

  onSubmit() {
    // this.verificaForm();
    // if (
    //   this.userLogin.nome != null &&
    //   this.userLogin.login != null &&
    //   this.passwordInvalid === false
    // ) {
      return this.save();
    // }
    // return this.presentAlert();
  }

  save() {
    this.userService.create(this.userLogin).then(res => {
      console.log('sucess', res);
      
    });
      // .then(sucess => {
      //   console.log("sucess", this.userLogin);
      //   // this.userDatabase.createUser(this.userLogin);
      //   this.toast.create({
      //     message: `Cadastro realizado com sucesso!`,
      //     duration: 3000
      //   });
      //   // this.navCtrl.setRoot("LoginPage");
      // })
      // .catch(fail => {
      //   this.showToast(fail.code);
      //   console.error("Erro não tratado: ", fail);
      // });
  } 

  verificaForm() {
    if (this.passwordC === this.userLogin.password) {
      return this.passwordInvalid = false;
    }
  }

  // private showToast(code: string): void {
  //   if (code === "auth/invalid-email") {
  //     this.toast
  //       .create({
  //         message: `Digite um E-mail valido!`,
  //         duration: 5000
  //       })
  //       .present();
  //   }
  //   if (code === "auth/weak-password") {
  //     this.toast
  //       .create({
  //         message: `Senha Invalida, minimo de 6 dígitos!`,
  //         duration: 5000
  //       })
  //       .present();
  //   }
  //   if (code === "auth/email-already-in-use") {
  //     this.toast
  //       .create({
  //         message: `Já existe uma conta com esse E-mail!`,
  //         duration: 5000
  //       })
  //       .present();
  //   }
  //   if (code === "auth/argument-error") {
  //     const alert = this.AlertCtrl.create({
  //       title: "Nome Inváldo!",
  //       subTitle: "Não pode ser vazio!",
  //       buttons: ["Voltar"]
  //     });
  //     alert.present();
  //   }

  // }

  // onLogin() {
  //   this.navCtrl.setRoot("LoginPage");
  // }

  // presentAlert() {
  //   if (this.userLogin.nome === null) {
  //     const alert = this.AlertCtrl.create({
  //       title: "Nome Inváldo!",
  //       subTitle: "Não pode ser vazio!",
  //       buttons: ["Voltar"]
  //     });
  //     alert.present();
  //   }
  //   if (this.userLogin.login === null) {
  //     const alert = this.AlertCtrl.create({
  //       title: "Digite um Email!",
  //       subTitle: "Não pode ser vazio!",
  //       buttons: ["Voltar"]
  //     });
  //     alert.present();
  //   }
  //   if (this.passwordInvalid === true) {
  //     const alert = this.AlertCtrl.create({
  //       title: "Senhas não conferem!",
  //       subTitle: "Digite novamente!",
  //       buttons: ["Voltar"]
  //     });
  //     alert.present();
  //   }
  // }
}
