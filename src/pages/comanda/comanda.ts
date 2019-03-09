import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Comanda } from '../../model/comanda/comanda.model';
import { Produto } from '../../model/produto/produto.model';
import { ComandaService } from '../../providers/comanda/comanda.service';
import { Subscription } from 'rxjs';
import { ProdutoService } from '../../providers/produto/produto.service';
import { tap, map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-comanda',
  templateUrl: 'comanda.html',
})
export class ComandaPage {

  public idProdutos;
  public idComanda;

  private subscription: Subscription;

  comanda: Comanda;
  produto: Produto;

  produtos: Produto[] = [];

  prodArray: [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public comandaService: ComandaService,
    public produtoService: ProdutoService,
  ) {
    this.inicializeVariables();
    this.getProdutosChecked();
  }
  
  getProdutosChecked() {
    this.subscription = this.idComanda = this.navParams.get("uniqueParam");
    this.comanda._id = this.idComanda;
    if(this.idComanda !== undefined) {
      this.loadComanda(this.idComanda);
    }
    this.idProdutos = this.navParams.get('idProdutos');
    return this.produtos = this.idProdutos;
  }
  
  loadComanda(uid) {
   this.comandaService.findOne(uid).subscribe((resComanda) => {
      const idResProdutos = resComanda.idProdutos;
      console.log('resComanda: ', resComanda);
      
      // this.loadProduto(idResProdutos);
      return this.comanda = resComanda;
    });
  }

  loadProduto(uid) {
    console.log(uid.forEach((idPerProduto: number) => {
      // console.log("idPerProduto: ", idPerProduto);
      this.produtoService.findByParam(idPerProduto).subscribe(res => {
        // console.log(res)
        this.produto = res
      })  
    }).prodArray);
    // console.log('produto: ', this.prodArray);
    
  }
  
  inicializeVariables() {
    this.comanda = new Comanda();
    this.produto = new Produto();
  }

  onComanda() {
    this.navCtrl.setRoot("ResumoPage");
  }

  save() {
    this.comanda.idProdutos = this.idProdutos;
    if (this.comanda.idProdutos) {
      return this.comandaService.createComanda(this.comanda).subscribe(sucess => {
        this.navCtrl.setRoot("BuscaPage");
      });
    }
    return console.log("Necessario selecionar novos produtos!");
    
  }

}
