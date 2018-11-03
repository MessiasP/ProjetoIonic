import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagamentoPage } from './pagamento';
import { TranslateModule } from '@ngx-translate/core';

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
