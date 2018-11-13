import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})
export class BuscaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController) {
  }

  onDetalhaProduto(): void {
    this.navCtrl.setRoot('DetalhaProdutoPage');
  }
  onCadastraProduto(): void {
    this.navCtrl.setRoot('CadastraProdutoPage');
  }

  ionViewDidEnter(){
    //HABILITA MENU CASE F5
    this.menuCtrl.enable(true);
   }

}
