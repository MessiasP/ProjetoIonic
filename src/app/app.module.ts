import { AngularFireDatabase } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';

import { FIREBASE_CONFIG } from './firebase.credentials';

import { HomeModule } from '../pages/home/home.module';
import { UserService } from '../providers/user/user.service';
import { UserDatabaseService } from '../providers/user-database/user-database.service';
import { ProdutoService } from '../providers/produto/produto.service';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HomeModule,
    TranslateModule.forChild(),
    BrMaskerModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },,
    UserService,
    UserDatabaseService,
    ProdutoService,
    TranslateService,
    TranslateStore,
    AngularFireAuth,
    AngularFireDatabase,
  ]
})
export class AppModule { }
