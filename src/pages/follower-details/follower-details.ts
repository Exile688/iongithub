import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the FollowerDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-follower-details',
  templateUrl: 'follower-details.html'
})
export class FollowerDetailsPage {
  selectedFollower: any;


  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.selectedFollower = navParams.get('follower');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowerDetailsPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
