import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RealisationPage } from './realisation';
import { ProjetPage } from '../projet/projet';


@NgModule({
  declarations: [
    RealisationPage,
    ProjetPage
  ],
  imports: [
    IonicPageModule.forChild(RealisationPage),
  ],
})
export class RealisationPageModule {}
