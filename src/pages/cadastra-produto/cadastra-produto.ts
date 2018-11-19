import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, ToastController, IonicPage } from 'ionic-angular';
import { Produto } from '../Models/produto.model';
import { ProdutoService } from '../../providers/produto/produto.service';

@IonicPage()
@Component({
  selector: 'page-cadastra-produto',
  templateUrl: 'cadastra-produto.html',
})
export class  CadastraProdutoPage {

  uid: string;
  produto: Produto;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private produtoService: ProdutoService,
    private toast: ToastController,
  ) {

    this.produto = new Produto();
    this.uid = null;
  }

  onSubmit():void {
    console.log("Produto: ", this.produto);

    this.save();

  }

  save() {
    this.produtoService.create(this.produto).then( sucess => {
      console.log("SALVOU", sucess);
      this.toast.create({
        message: 'Produto criado com Sucesso!',
        duration: 3000
      });
    this.navCtrl.setRoot('BuscaPage');
    }).catch ( fail => {
      console.error("ERROR: ", fail);

    });
  }

  ionViewCanEnter(){
    //HABILITA MENU CASE F5
    this.menuCtrl.enable(true);
   }

}
