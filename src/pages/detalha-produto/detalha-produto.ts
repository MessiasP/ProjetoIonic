import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from '../../providers/produto/produto.service';
import { Produto } from '../../model/produto/produto.model';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-detalha-produto',
  templateUrl: 'detalha-produto.html',
})
export class DetalhaProdutoPage {
  public params;

  produto: Produto;

  private subscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtoService: ProdutoService
  ) {
      this.inicializeVariables();
      this.getId();
  }
    
  inicializeVariables() {
    this.produto = new Produto();
  }
    
  onBusca():void {
    this.navCtrl.setRoot('BuscaPage');
    this.produto.codigoBarra
  }
    
  getId() {
    this.subscription = this.params = this.navParams.get("firstParam");
    this.load(this.params);
  }

  load(uid) {
    this.produtoService.findOne(uid).subscribe( (produto) => {
      console.log('produto waiting: ', produto);
      return this.produto = produto;
    });
  }

  onResumo():void {
    this.navCtrl.setRoot('ResumoPage');
  }

}
