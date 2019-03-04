import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Comanda } from '../../model/comanda/comanda.model';
import { Produto } from '../../model/produto/produto.model';
import { ComandaService } from '../../providers/comanda/comanda.service';

@IonicPage()
@Component({
  selector: 'page-comanda',
  templateUrl: 'comanda.html',
})
export class ComandaPage {

  public idProdutos;

  comanda: Comanda;
  produto: Produto;

  produtos: Produto;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public comandaService: ComandaService,
  ) {
    this.inicializeVariables();
    this.getProdutosChecked();
  }
  
  getProdutosChecked() {
    this.idProdutos = this.navParams.get('idProdutos');
    this.produtos = this.idProdutos;
    console.log("herehere: ", this.idProdutos);
  }
  
  inicializeVariables() {
    this.comanda = new Comanda();
    this.produto = new Produto();
  }

  onBusca() {
    this.navCtrl.setRoot("BuscaPage");
  }

  save() {
    if (this.comanda.idProdutos) {
      this.comanda.idProdutos = this.idProdutos;
      this.comandaService.createComanda(this.comanda).subscribe(sucess => {
        console.log("SALVOU", sucess);
      });
    }
    return console.log("Necessario selecionar novos produtos!");
    
  }

}
