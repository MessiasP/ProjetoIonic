import { ProdutoService } from './../providers/produto/produto.service';
import { TranslateStore } from '@ngx-translate/core/src/translate.store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CONFIG_FIREBASE } from './../config/config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../providers/user/user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserDatabaseService } from './../providers/user/userDatabase.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forChild(),
    AngularFireModule.initializeApp(CONFIG_FIREBASE),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TranslateService,
    TranslateStore,
    AngularFireAuth,
    UserService,
    AngularFireDatabase,
    UserDatabaseService,
    ProdutoService,
  ]
})
export class AppModule {}
