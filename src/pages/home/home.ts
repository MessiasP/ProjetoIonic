import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, translate : TranslateService) {
     translate.get([
       "SLIDE_FIRST",
       "SLIDE_SECUND"
     ]).subscribe(
        (values) => {
          console.log("AQUI DOIDAO", values);

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

  onSlideChangeStart(slider) {
  //  this.showSkip = !slider.isEnd();
  }

  onLogin():void {
    this.navCtrl.push('LoginPage');
  }


}
