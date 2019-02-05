import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';


import { Settings } from '../providers';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';




@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Conference Guide</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list no-lines>
        <ion-item *ngFor="let p of pages"  (click)="openPage(p)">
          <ion-icon [name]="p.icon" item-left></ion-icon>
          {{ p.title }}
        </ion-item>

       

        
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
 
})
export class MyApp {
  rootPage:any = TabsPage;

  pages: Array<{title:string, component:any, icon:string}>;

  @ViewChild(Nav) nav: Nav;

  

  
  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
    this.initTranslate();

    this.pages = [
      // { title: 'Tutorial', component: 'TutorialPage' },
      { title: 'Happening Now', component: 'WelcomePage', icon:"funnel" },
      { title: 'Schedule', component: 'SchedulePage', icon:"list"  },
      { title: 'Speakers', component: 'SpeakersPage', icon:"people"  },
      { title: 'Sponsors', component: 'SponsorsPage', icon:"ionic"  },
      { title: 'Exhibitors', component: 'ExhibitorsPage', icon:'album'  },
      { title: 'Directions (Map)', component: 'MapsPage' , icon:'map' },
      { title: 'Attendees', component: 'AttendeesPage', icon:'ios-people'  },
      { title: 'About the Conference', component: 'AboutPage' , icon:'information' },
      { title: 'WiFi Information', component: 'WifiPage', icon:'wifi'  },
      { title: 'Social Media', component: 'SocialPage' , icon:'social' },
      { title: 'Profile', component: 'ProfilePage' , icon:'social' },
      { title: 'Notifications', component: 'NotifyPage' , icon:'social' },
      { title: 'SocialWall', component: 'HomePage' , icon:'social' }

    ]
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

 
}
