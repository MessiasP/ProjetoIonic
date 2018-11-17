import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserLogin } from '../Models/user.login.model';
import { UserService } from '../../providers/user/user.service';
@IonicPage()
@Component({
  selector: 'page-registra',
  templateUrl: 'registra.html',
})
export class RegistraPage {

  signupForm : FormGroup;
  userLogin: UserLogin;
  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserService) {

      this.userLogin = new UserLogin();

      this.signupForm= this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: [''],
        password: ['',[Validators.required, Validators.minLength(6)]],
        passwordC: ['',[Validators.required, Validators.minLength(6)]]
      });
    }

  onSubmit(): void {
    this.userService.createUser(this.userLogin).then(sucess => {
      console.log('foi', sucess)
      this.navCtrl.setRoot('LoginPage');
    }).catch(fail => {
      console.log('fail', fail);
    })
  }

  onLogin():void {
    this.navCtrl.setRoot('LoginPage');
  }

}
