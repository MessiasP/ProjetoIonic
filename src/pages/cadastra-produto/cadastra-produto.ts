import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the CadastraProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastra-produto',
  templateUrl: 'cadastra-produto.html',
})
export class CadastraProdutoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController) {
  }

  onBusca():void {
    this.navCtrl.setRoot('BuscaPage');
  }

  ionViewCanEnter(){
    //HABILITA MENU CASE F5
    this.menuCtrl.enable(true);
   }

}
