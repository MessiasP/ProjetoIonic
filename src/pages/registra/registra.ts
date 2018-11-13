import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registra',
  templateUrl: 'registra.html',
})
export class RegistraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLogin():void {
    this.navCtrl.setRoot('LoginPage');
  }

}
