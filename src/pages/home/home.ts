import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StatusBar } from "@ionic-native/status-bar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, statusBar: StatusBar, platform: Platform) {
    platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#ffffff');
    })
  }

}
