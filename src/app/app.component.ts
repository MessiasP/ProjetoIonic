import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  pages: any;
  rootPage = HomePage;
  value: boolean = false;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
  ) {
    this.pages = [
      { title: "NOVO PRODUTO", component: "CadastraProdutoPage" },
      { title: "COMANDAS", component: "ResumoPage" },
      { title: "LOGOUT", component: this.rootPage }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // signOut(): Promise<void> {
  // 	return this.afAuth.auth.signOut();
  // }
  openPage(page: { title: string; component: any }): void {
    this.nav.setRoot(page.component);
  }
}
