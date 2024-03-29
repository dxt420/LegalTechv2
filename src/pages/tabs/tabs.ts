import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root, Tab2Root, Tab3Root, Tab4Root, Tab5Root } from '../';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;
  


  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  color: string = "secondary";
  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    
  }

  selectedTab(){
    this.color ="primary";
  }
}
