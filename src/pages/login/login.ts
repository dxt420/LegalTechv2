import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase';
import { ItemDetailPage } from '../item-detail/item-detail';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userProfile: any = null;
  icons:string = 'log-in'; //string to keep track of which icon is showing

  constructor(public navCtrl: NavController, navParams: NavParams, public authProvider:AuthProvider) {
    // this.item = navParams.get('item') || items.defaultItem;
    firebase.auth().onAuthStateChanged( user => {
      if (user){
        this.userProfile = user;
      } else { 
          this.userProfile = null;
      }
  });
  
  

  }

  // facebookLogin(){
  //   this.authProvider.facebookLogin()
  //     .then(res => {
  //       //We have successfully logged in
  //       //Do something with the response 
  //     })
  // }


  googleLogin(){
    this.authProvider.googleLogin()
      .then(res => {
        //We have successfully logged in
        //Do something with the response 

        // this.navCtrl.push(ItemDetailPage);
      })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
