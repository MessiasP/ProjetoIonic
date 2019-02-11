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

@IonicPage()
@Component({
  selector: "page-busca",
  templateUrl: "busca.html"
})
export class BuscaPage {

  produto: Produto;

  products: Produto[];

  produtoVendido: any;

  constructor(
    private comandaService: ComandaService,
    private loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private produtoService: ProdutoService,
    private toast: ToastController,
    private vendaProdutoService: VendaProdutoService,

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
    this.produtoService.findAll().then(sucess => {
      console.log('trouxa', sucess);
    }).catch(err => {
      console.log('erro', err);
    })
  }

  verifyCheckbox() {
    this.produtoVendido = null;
    // this.produtoVendido = this.products.filter((product) => {
    //   console.log(product);

    //   return product.checked;
    // });
    console.log(this.produtoVendido);
    if(this.produtoVendido != null) {
      return this.save();
    }
      return console.log("marque um algum dos podutos");
    
  }

  save() {

    let loading: Loading = this.showLoading();
    
    console.log("fora", this.produtoVendido);
    this.comandaService.createComanda(this.produtoVendido).then(sucess => {
    console.log("SALVOU", sucess);
    this.produtoVendido = null;
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
  searchProduct() {
    this.produtoService.findByParam(this.produto.nome)
  }

  //  getOne() {
  //   return this.produtoService.findOne('uid').subscribe(res => {
  //     console.log("res", res);

  //     this.product = res;
  //   });
  //  }
}
