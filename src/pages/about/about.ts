import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  items = [ 'test', 'test', 'test','test', 'test', 'test','test', 'test', 'test','test', 'test', 'test','test', 'test', 'test','test', 'test', 'test','test', 'test'];

  constructor(public navCtrl: NavController) {

  }

}
