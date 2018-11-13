import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { PagamentoPage } from './pagamento';

@NgModule({
  declarations: [
    PagamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(PagamentoPage),
    TranslateModule.forChild(),
  ],
})
export class PagamentoPageModule {}
