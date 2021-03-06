import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

//liste des importations des pages créer.
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RealisationPage } from '../pages/realisation/realisation';
import { ArticlesPage } from '../pages/articles/articles';
import { ProjetPage } from '../pages/projet/projet';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//liste des importations des providers pour importer les infos de la BDD.
import { ArticlesProvider } from '../providers/articles/articles';
import { RealisationsProvider } from '../providers/realisations/realisations';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RealisationPage,
    ArticlesPage,
    ProjetPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RealisationPage,
    ArticlesPage,
    ProjetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticlesProvider,
    RealisationsProvider
  ]
})
export class AppModule {}
