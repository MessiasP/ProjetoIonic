import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhaProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalha-produto',
  templateUrl: 'detalha-produto.html',
})
export class DetalhaProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onBusca():void {
    this.navCtrl.setRoot('BuscaPage');
  }

  onResumo():void {
    this.navCtrl.setRoot('ResumoPage');
  }
}
