import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastraProdutoPage } from './cadastra-produto';

@NgModule({
  declarations: [
    CadastraProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraProdutoPage),
  ],
})
export class CadastraProdutoPageModule {}
