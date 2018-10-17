import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLogin():void {
    this.navCtrl.push('LoginPage');
  }

  slides = [
    {
      title:'slideFir',
      description:'primeiro slide',
      imagem:'../../assets/imgs/womannegociation.jpg'
    },
    {
      title:'slideSeg',
      description:'segundo slide',
      imagem:'../../assets/imgs/working-laptop.jpg'
    }
  ];

}
