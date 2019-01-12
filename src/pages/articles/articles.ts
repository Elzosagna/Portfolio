import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RealisationPage} from '../realisation/realisation';
import { ArticlesProvider } from '../../providers/articles/articles';
/**
 * Generated class for the ArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {
    article: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ArticlesProvider: ArticlesProvider) {
    this.displayArticle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlesPage');
  }

  displayArticle()
  {
    this.ArticlesProvider.displayArticle()
      .then(data=>
        {
          this.article = data;
            console.log(this.article);
        });
  }

}
