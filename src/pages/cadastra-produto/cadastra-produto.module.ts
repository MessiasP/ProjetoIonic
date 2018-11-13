import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { CadastraProdutoPage } from './cadastra-produto';

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
