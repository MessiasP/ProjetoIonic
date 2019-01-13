import { VendaProdutoService } from './../../providers/produto/venda-produto.service';
import { ComandaService } from './../../providers/comanda/comanda.service';
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  ToastController,
  Loading,
  LoadingController
} from "ionic-angular";

import { map } from "rxjs/operators";

import { ProdutoService } from "../../providers/produto/produto.service";
import { Produto } from "../../model/produto/produto.model";
import { Comanda } from '../../model/comanda/comanda.model';

@IonicPage()
@Component({
  selector: "page-busca",
  templateUrl: "busca.html"
})
export class BuscaPage {

  comanda: Comanda;

  produto: Produto;

  products: Produto[];

  constructor(
    private comandaService: ComandaService,
    private loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private produtoService: ProdutoService,
    private toast: ToastController,

  ) {}

  onDetalhaProduto(): void {
    this.navCtrl.setRoot("DetalhaProdutoPage");
  }

  onCadastraProduto(): void {
    this.navCtrl.setRoot("CadastraProdutoPage");
  }

  ionViewDidEnter() {
    //HABILITA MENU CASE F5
    this.menuCtrl.enable(true);

    this.getAll();
  }

  getAll() {  
    this.produtoService.findAll()
      .snapshotChanges()
      .pipe(
        map(changes => {  
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }));
        })
        
      )
      .subscribe((produtos) => {
        this.products = produtos.map(produt => Object.assign({}, produt, { checked: false }));
      });
      
  }

  verifyCheckbox() {
    this.comanda.produto = this.products.filter((product) => {
      console.log(product);

      return product.checked;
    });
    console.log(this.comanda);
    if(this.comanda != null) {
      return this.saveComanda();
    }
      return console.log("marque um algum dos podutos");
    
  }

  saveComanda() {
    this.comanda.nome = 'Souza';
    let loading: Loading = this.showLoading();
    
    console.log("fora", this.comanda.produto);
    this.comandaService.createComanda(this.comanda).then(sucess => {
    console.log("SALVOU", sucess);
      this.toast.create({
        message: 'Produto criado com Sucesso!',
        duration: 3000
      });
    
    loading.dismiss();
    }).catch(fail => {
      console.error("ERROR: ", fail);
      loading.dismiss();
    })
  }
  
  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: "Por favor aguarde..."
    });
    loading.present();
    return loading;
  }

  //procurar produto por parametros
  // searchProduct() {
  //   this.produtoService.findByParam(this.produto.nome)
  // }

  //  getOne() {
  //   return this.produtoService.findOne('uid').subscribe(res => {
  //     console.log("res", res);

  //     this.product = res;
  //   });
  //  }
}
