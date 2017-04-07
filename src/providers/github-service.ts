import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the GithubService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubService {
  readonly BASE_URL = "https://api.github.com/users/";


  constructor(public http: Http) {
    console.log('Hello GithubService Provider');
  }

//search(filter: string){

//}

getProfile(username: string): Observable<any>{
  return this.http.get(`${this.BASE_URL}${username}`)
  .map(response => response.json());
}

getRepos(username: string){
  return this.http.get(`${this.BASE_URL}${username}/repos`)
  .map(response => response.json());
}

getFollowers(username: string){
  return this.http.get(`${this.BASE_URL}${username}/followers`)
  .map(response => response.json());
}

}
