import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  image: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //showSkip = true;
  slides: Slide[];

  constructor(
    public navCtrl: NavController,
    private translate: TranslateService,
    public menuCtrl: MenuController) {
     translate.get([
       "SLIDE_FIRST",
       "SLIDE_SECUND"
     ]).subscribe(
        (values) => {

            this.slides = [

              {
                title: values.SLIDE_FIRST,
                image:'assets/imgs/womannegociation.jpg'
              },
              {
                title: values.SLIDE_SECUND,
                image:'assets/imgs/working-laptop.jpg'
              }

            ];
        });

  }

  ionViewDidEnter(){
    //HABILITA MENU CASE F5
    this.menuCtrl.enable(false);
   }

  onLogin():void {
    this.navCtrl.setRoot('LoginPage');
  }


}
