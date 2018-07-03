import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-add-report',
  templateUrl: 'add-report.html',
})
export class AddReportPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReportPage');

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log("LAT: " + resp.coords.latitude);
      console.log("LON: " + resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
