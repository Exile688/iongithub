import { Component } from '@angular/core';
import { ModalController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import { GithubService } from '../../providers/github-service';
import { RepoDetailsPage } from '../repo-details/repo-details';
import { FollowerDetailsPage } from '../follower-details/follower-details';


/*
  Generated class for the Profiles page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html'
})
export class ProfilesPage {
github_user: string = "";
profile: any;
repos: any;
followers: any;

  constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController, public modalCtrl: ModalController, public navParams: NavParams, private githubService: GithubService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }

  onSubmit() {
    this.getProfile(this.github_user);
    this.github_user = '';
  }



  getProfile(username){
     let loader = this.loadingCtrl.create ({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.githubService.getProfile(username).subscribe(
      response => {
      this.profile = response
      loader.dismiss();
  },
      error => {
      loader.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Network Error',
      subTitle: 'Connection Failed',
      buttons: ['OK']
    });
    alert.present();
      }
    )
  } 

  showRepos(username) {
    this.getRepos(username);
    this.followers = null;
  }

 getRepos(username) {
   this.githubService.getRepos(username).subscribe(
    response =>
    this.repos = response
   )
 }

 repoTapped(event, repo) {
   let repoModal = this.modalCtrl.create(RepoDetailsPage, {
     repo:repo
   });

   repoModal.present();
  }

 getFollowers(username) {
   this.githubService.getFollowers(username).subscribe(
    response =>
    this.followers = response
   )
 }

 showFollowers(username) {
    this.getFollowers(username);
    this.repos = null;
  }

followerTapped(event, follower) {
   let followerModal = this.modalCtrl.create(FollowerDetailsPage, {
     follower: follower 
   });

   followerModal.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Network Error',
      subTitle: 'Connection Failed',
      buttons: ['OK']
    });
    alert.present();
  }

}
