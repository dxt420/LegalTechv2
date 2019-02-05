import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../mocks/providers/items';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  about;


  xx;

  groupedAbout = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, items: Items) {
    this.xx = items.defaultItem.extra.about;
    // this.xx = navParams.get('about');

   
    this.about = this.xx.map(a => a.name);
    

    console.log(this.xx);

    this.groupAbout(this.about);
  }


  groupAbout(about){
    let sortedAbout = about.sort();
    let currentLetter = false;
    let currentAbout = [];

    // console.log(sortedAbout);

    sortedAbout.forEach((value, index) => {
        if (value.charAt(0) != currentLetter) {
            currentLetter = value.charAt(0);
            
            let newGroup = {
              letter: currentLetter,
              about: []
            };

            currentAbout = newGroup.about;
            this.groupedAbout.push(newGroup);


        }

        currentAbout.push(value);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
