import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistraPage } from './registra';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    RegistraPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistraPage),
    BrMaskerModule,
  ],
})
export class RegistraPageModule {}
