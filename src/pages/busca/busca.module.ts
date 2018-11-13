import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { BuscaPage } from './busca';

@NgModule({
  declarations: [
    BuscaPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscaPage),
    TranslateModule.forChild(),
  ],
})
export class BuscaPageModule {}
