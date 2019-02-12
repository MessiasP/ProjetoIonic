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
    private AlertCtrl: AlertController
  ) {
    this.produto = new Produto();
    // this.produto.key = "1234";
  }

  onSubmit(): void {
    this.codigo = this.produto.codigoBarra;
    // this.produtoService.codeExist(this.codigo);
    // if (!this.codigo){
    //   return this.presentAlert();
    // }
    this.save();
  }

  /**
   * Cria um produto.
   * Eu acho q ele nunca ta entrendo no error, tem q testar
   */
  save() {
    let loading: Loading = this.showLoading();
    this.produtoService.create(this.produto).subscribe(res => {
      loading.dismiss();
      this.toast.create({
        message: "Produto criado com Sucesso!",
        duration: 3000
      });
      this.navCtrl.setRoot("BuscaPage");
    }, error1 => {
      console.error('ERROR: ', error1);
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
