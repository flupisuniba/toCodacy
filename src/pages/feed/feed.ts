import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedsProvider } from '../../providers/feeds/feeds';

import { ToastController } from 'ionic-angular';
import { AddReportPage } from '../add-report/add-report';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  test_date: any;
  feeds: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private feedService: FeedsProvider,
    public toastCtrl: ToastController) {
      this.getFeeds();
      this.test_date = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  getFeeds() {
    const toast = this.toastCtrl.create({
      message: 'Errore inatteso nel server ...',
      duration: 3000,
      position: 'top'
    });

    this.feedService.getAllFeeds().subscribe(
      data => { this.feeds = data; },
      error => { 
        console.log(error);
        toast.present(); 
      }
    );


  }

  addReport() {
    this.navCtrl.push(AddReportPage);
  }

}
