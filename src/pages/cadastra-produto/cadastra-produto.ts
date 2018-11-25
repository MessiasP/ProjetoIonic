import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  MenuController,
  ToastController,
  IonicPage,
  Loading,
  LoadingController,
  AlertController
} from "ionic-angular";
import { ProdutoService } from "../../providers/produto/produto.service";
import { Produto } from "../../model/produto/produto.model";
// VER QUESTAO DE ESTOQUE DE VIRIAS CAIXAS
@IonicPage()
@Component({
  selector: "page-cadastra-produto",
  templateUrl: "cadastra-produto.html"
})
export class CadastraProdutoPage {
  uid: string;
  produto: Produto;
  codigo: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private produtoService: ProdutoService,
    private toast: ToastController,
    private loadingCtrl: LoadingController,
    private AlertCtrl: AlertController,
  ) {
    this.produto = new Produto();
    // this.produto.key = "1234";
  }

  onSubmit(): void {
    console.log("Produto: ", this.produto);
    console.error("CODIGO", this.codigo);
    // this.showLoading();
    this.codigo = this.produto.codigoBarra;
    // this.produtoService.codeExist(this.codigo);
    // if (!this.codigo){
    //   return this.presentAlert();
    // }
    return this.save();
  }

  save() {
    let loading: Loading = this.showLoading();

    this.produtoService.create(this.produto).then( sucess => {
      console.log("SALVOU", sucess);
      this.toast.create({
        message: 'Produto criado com Sucesso!',
        duration: 3000
      });
    this.navCtrl.setRoot('BuscaPage');
    loading.dismiss();
    }).catch ( fail => {
      console.error("ERROR: ", fail);
      loading.dismiss();
    });
  }

  ionViewCanEnter() {
    //HABILITA MENU CASE F5
    this.menuCtrl.enable(true);
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: "Por favor aguarde..."
    });
    loading.present();
    return loading;
  }

  onBusca() {
    this.navCtrl.setRoot("BuscaPage");
  }

  presentAlert() {
    if (!this.produto.codigoBarra) {
      const alert = this.AlertCtrl.create({
        title: "Produto Já cadastrado!",
        buttons: ["Voltar"]
      });
      alert.present();
    }
  }
}
