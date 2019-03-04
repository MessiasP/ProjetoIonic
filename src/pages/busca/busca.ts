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

  produto: Produto;
  comanda: Comanda;

  products: Produto[] = [];

  produtoVendido: any;

  constructor(
    private loadingCtrl: LoadingController,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private comandaService: ComandaService,
    private produtoService: ProdutoService,
    private toast: ToastController,
  ) {
    this.inicializeVariables();
  }
  
  ionViewDidEnter() {
    //HABILITA MENU CASE F5
    this.menuCtrl.enable(true);
    
    this.getAll();
  }

  inicializeVariables() {
    this.comanda = new Comanda();
  }

  onDetalhaProduto(id, option: string) {
    switch (option) {
      case 'edit':
      this.navCtrl.setRoot("DetalhaProdutoPage", {
        firstParam: id
      });
      break;
    }
  }
  
  onCadastraProduto(): void {
    this.navCtrl.setRoot("CadastraProdutoPage");
  }

  getAll() {
    this.produtoService.findAll().subscribe((res: any) => {
      // console.log(res.produtoRes.forEach());
      
      res.produtoRes.docs.forEach(element => {
        // console.log("and",element);
        this.products.push(element)
      });
    });
  }

  verifyCheckbox() {
    this.produtoVendido = [];
    this.produtoVendido = this.products.filter((product) => {
      // console.log(product);

      return product.checked;
    });
    // console.log(this.produtoVendido);
    if(this.produtoVendido != null) {
      this.comanda.produtos = this.produtoVendido;
      return this.navCtrl.setRoot("ComandaPage", {
        idProdutos: this.produtoVendido,
      });      
      // return this.save(this.comanda);
    }
      return console.log("marque um algum dos podutos");
    
  }

  save(comanda) {
    // let loading: Loading = this.showLoading();
    console.log("fora", this.produtoVendido);
    this.comandaService.createComanda(comanda).subscribe(sucess => {
    console.log("SALVOU", sucess);
    this.produtoVendido = null;
      // this.toast.create({
      //   message: 'Produto criado com Sucesso!',
      //   duration: 3000
      // });
    
    // loading.dismiss();
    // }).catch(fail => {
    //   console.error("ERROR: ", fail);
    //   loading.dismiss();
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
