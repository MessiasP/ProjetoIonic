import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscaPage } from './busca';
import { TranslateModule } from '@ngx-translate/core';

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
