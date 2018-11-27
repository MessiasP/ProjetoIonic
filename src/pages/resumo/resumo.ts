import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { map } from 'rxjs/operators';

import { ComandaService } from './../../providers/comanda/comanda.service';

@IonicPage()
@Component({
  selector: 'page-resumo',
  templateUrl: 'resumo.html',
})
export class ResumoPage {

  constructor(
    private comandaService: ComandaService,
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

    this.searchCarrinhos();
   }

   searchCarrinhos() {
    this.comandaService.findAll()
    .snapshotChanges()
    .pipe(map(changes => {
      return changes.map(c =>({
        key: c.payload.key,
        ...c.payload.val()
      }));
    })).subscribe((comanda) => {
      console.log("Funfou!!");
    });
   }

}
