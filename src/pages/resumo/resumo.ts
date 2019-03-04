import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { map } from 'rxjs/operators';

import { ComandaService } from './../../providers/comanda/comanda.service';
import { Produto } from '../../model/produto/produto.model';
import { Comanda } from '../../model/comanda/comanda.model';

@IonicPage()
@Component({
  selector: 'page-resumo',
  templateUrl: 'resumo.html',
})
export class ResumoPage {

  comanda: Comanda;

  comandas = [];

  constructor(
    private comandaService: ComandaService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    this.inicializeVariables();
  }

  inicializeVariables() {
    this.comanda = new Comanda();
  }
  
  ionViewCanEnter(){
    //HABILITA MENU CASE F5
    this.menuCtrl.enable(true);
    
    this.searchCarrinhos();
  }
  
  searchCarrinhos() {
    console.log('ta vindo!! ', this.comanda);
    this.comandaService.findAll().subscribe((comandas) => {
      return this.comanda = comandas;
    });
    
    // this.comandaService.findAll()
    // .snapshotChanges()
    // .pipe(map(changes => {
      //   return changes.map(c =>({
        //     key: c.payload.key,
        //     ...c.payload.val()
        //   }))
        // })).subscribe((produtosSub) => {
          //   this.produtos = produtosSub.map(produt => Object.assign(produt));
          //   console.log("AQUI", this.produtos);
          
          // });
  }
  
  onPagamento():void {
    this.navCtrl.setRoot('PagamentoPage');
  }

  onBusca():void {
    this.navCtrl.setRoot('BuscaPage');
  }
}
  