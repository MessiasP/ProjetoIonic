import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Comanda } from '../../model/comanda/comanda.model';
import { Produto } from '../../model/produto/produto.model';

@IonicPage()
@Component({
  selector: 'page-comanda',
  templateUrl: 'comanda.html',
})
export class ComandaPage {

  public idProdutos;

  comanda: Comanda;
  produto: Produto;

  produtos: Produto[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.inicializeVariables();
    this.idProdutos = navParams.get('idProdutos');
    console.log("herehere: ", this.idProdutos);
    this.produtos = this.idProdutos;
    
  }
  
  inicializeVariables() {
    this.comanda = new Comanda();
    this.produto = new Produto();
  }

  onBusca() {
    this.navCtrl.setRoot("BuscaPage");
  }

  save() {
    console.log("LINDAO");
    
  }
}
