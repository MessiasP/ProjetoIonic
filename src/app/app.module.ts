import { CONFIG_FIREBASE } from './../config/config';
import { TranslateStore } from '@ngx-translate/core/src/translate.store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forChild(),
    AngularFireModule.initializeApp(CONFIG_FIREBASE.firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TranslateService,
    TranslateStore,
    AngularFireAuth
  ]
})
export class AppModule {}
