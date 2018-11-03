import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistraPage } from './registra';

@NgModule({
  declarations: [
    RegistraPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistraPage),
    TranslateModule.forChild(),
  ],
})
export class RegistraPageModule {}
