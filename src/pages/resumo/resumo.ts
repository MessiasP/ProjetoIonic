import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the ResumoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resumo',
  templateUrl: 'resumo.html',
})
export class ResumoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController) {
  }

  onPagamento():void {
    this.navCtrl.setRoot('PagamentoPage');
  }
  onBusca():void {
    this.navCtrl.setRoot('BuscaPage');
  }

  ionViewCanEnter(){
    //HABILITA MENU CASE F5
    this.menuCtrl.enable(true);
   }

}
