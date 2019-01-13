import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Loading, LoadingController } from 'ionic-angular';

import { map } from 'rxjs/operators';

import { ComandaService } from './../../providers/comanda/comanda.service';
import { VendaProdutoService } from '../../providers/produto/venda-produto.service';
import { Comanda } from '../../model/comanda/comanda.model';
import { Produto } from '../../model/produto/produto.model';

@IonicPage()
@Component({
  selector: 'page-resumo',
  templateUrl: 'resumo.html',
})
export class ResumoPage {

  produtos: Produto[];

  showProdutos = false;

  constructor(
    private comandaService: ComandaService,
    private vendaProdutoService: VendaProdutoService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController) {
      // vendaProdutoService.findList().snapshotChanges()
      // .pipe(map(changes => {
      //   return changes.map(c =>({
      //     key: c.payload.key,
      //     ...c.payload.val()
      //   }))
      // })).subscribe((produtos) => {
      //   this.produtos = produtos.map(produt => Object.assign({}, produt, { checked: false }));
      //   // this.comandas = produtos.map(produt => Object.assign(produt));
      //   console.log("1",this.comandas);
      //   console.log("2",produtos);
      //   console.log("chave", this.comandas);
        
      // });

      // console.log("PRODUTOSSERVICE",this.produtos);
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
      }))
    })).subscribe((produtosSub) => {
      this.produtos = produtosSub.map(produt => Object.assign(produt));
      console.log("AQUI", this.produtos);
      
    });
   }

   onDetalhaComandas() {

     if (this.showProdutos == true) {
       return this.showProdutos = false;
     }
    
     return this.showProdutos = true;

    //  prodArr = this.produtos
   }

   private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: "Por favor aguarde..."
    });
    loading.present();
    return loading;
  }

   removeComanda(comanda: Comanda) {
    //  console.log(this.comandas.key);
     
    //  this.comandaService.delete(comanda).then(sucess => {
    //    console.log("Sucess removido", comanda);
       
    //  }).catch (err => {
    //    console.log(err);
       
    //  })
   }

}
