import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastraProdutoPage } from './cadastra-produto';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CadastraProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraProdutoPage),
    TranslateModule.forChild(),
  ],
})
export class CadastraProdutoPageModule {}
