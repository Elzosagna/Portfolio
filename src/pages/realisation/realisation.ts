import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetPage } from '../projet/projet';



@IonicPage()
@Component({
  selector: 'page-realisation',
  templateUrl: 'realisation.html',
})
export class RealisationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //fonction pour la redirection des projets vers leurs descriptions.
  nextPage(){
    this.navCtrl.push(ProjetPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealisationPage');
  }

}
