import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";

import { map } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

import { ProdutoService } from "../../providers/produto/produto.service";
import { Produto } from "../../model/produto/produto.model";

@IonicPage()
@Component({
  selector: "page-busca",
  templateUrl: "busca.html"
})
export class BuscaPage {
  products: Observable<Produto[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private produtoService: ProdutoService
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
    this.products = this.produtoService
      .findAll()
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }));
        })
      );
  }

  //  getOne() {
  //   return this.produtoService.findOne('uid').subscribe(res => {
  //     console.log("res", res);

  //     this.product = res;
  //   });
  //  }
}
