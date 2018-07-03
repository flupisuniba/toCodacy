import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, statusBar: StatusBar, platform: Platform) {
    platform.ready().then(() => {
      statusBar.styleDefault();
    })
  }

}
