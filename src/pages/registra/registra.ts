import { FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Component } from '@angular/core';
import { UserLogin } from './../Models/user.login.model';

import { UserService } from '../../providers/user/user.service';
import { UserDatabase } from './../../providers/user/userDatabase.service';

@IonicPage()
@Component({
  selector: 'page-registra',
  templateUrl: 'registra.html',
})
export class RegistraPage {

  nomeInvalid = false;
  userLogin: UserLogin;

  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserService,
    private userDatabase: UserDatabase,
    private toast: ToastController) {

      this.userLogin = new UserLogin();

      // VER PORQUE AS VALIDAÇÕES N SAO PEGAS || TROCAR PARA FORMA DO PROFESSOR (GITHUB)
      this.userLogin.nome = null;
      this.userLogin.sobrenome = null;
      this.userLogin.email = null;
      this.userLogin.cep = null;
      this.userLogin.cpf = null;
      this.userLogin.password = null;
    }

  onSubmit() {
    this.verificaForm(this.userLogin);
    console.log("PAGE, 1OBJETO EMVIADO: ", this.userLogin );//_____________________TIRAR ISSO AQUI__________________________________

    if(this.nomeInvalid === false)
    return this.userService.createUser(this.userLogin).then(sucess => {
      console.log("PAGE, 2OBJETO USER Voltou: ", this.userLogin );
      console.log("PAGE, 2OBJETO SUCESS Voltou: ", sucess );
      this.userDatabase.createUpdateUser(this.userLogin).then(sucess => {
        console.log('PAGE, FOI CRIADO!!', sucess);//_____________________TIRAR ISSO AQUI__________________________________
        this.navCtrl.setRoot('LoginPage');
        this.toast.create({
          message: `PAGE, Cadastro realizado com sucesso!`,
          duration: 3000
        });
      });
    }).catch(fail => {
      console.log('PAGE, NAO FOI CRIADO, CODE.ERRO:', fail); //_____________________TIRAR ISSO AQUI__________________________________
      this.showToast(fail.code);
    })

  }

  verificaForm(userLogin) {
    console.log("PAGE, TA CHAMANDO!!", userLogin);//_____________________TIRAR ISSO AQUI__________________________________
    if (userLogin.nome === " " || userLogin.nome === null) {
      console.log("PAGE, NOME INVALIDO = ", this.userLogin );//_____________________TIRAR ISSO AQUI__________________________________
      this.nomeInvalid = true;
      console.log("PAGE, NOME VALIDO");//_____________________TIRAR ISSO AQUI__________________________________

    }
  }

  private showToast(code: string): void {
    console.log(" code: ", code );//_____________________TIRAR ISSO AQUI__________________________________
    if (code === 'auth/invalid-email'){
      this.toast.create({
        message: `Digite um E-mail valido!`,
        duration: 5000
      }).present()
    }
    if (code === 'auth/weak-password'){
      this.toast.create({
        message: `Senha Invalida, minimo de 6 dígitos!`,
        duration: 5000
      }).present()
    }
    if (code === 'auth/email-already-in-use'){
      this.toast.create({
        message: `Já existe uma conta com esse E-mail!`,
        duration: 5000
      }).present()
    }
  }

  onLogin():void {
    this.navCtrl.setRoot('LoginPage');
  }

}
