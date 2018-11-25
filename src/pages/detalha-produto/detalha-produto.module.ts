import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhaProdutoPage } from './detalha-produto';

@NgModule({
  declarations: [
    DetalhaProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhaProdutoPage),
  ],
})
export class DetalhaProdutoPageModule {}
