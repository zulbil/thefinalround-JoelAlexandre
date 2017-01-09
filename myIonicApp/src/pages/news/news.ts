import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NewsService} from '../../app/services/news.service'; 
import {DetailsPage} from '../details/details'; 

/*
  Generated class for the News page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
	
	articles : any; 
  constructor(public navCtrl: NavController, public navParams: NavParams, private newsService:NewsService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  ngOnInit(){
  		this.getNews(); 
  } 

  getNews(){
  	this.newsService.getNews().subscribe(response =>{
  	this.articles = response;
  	});
  }

  viewNews(article){
  	this.navCtrl.push(DetailsPage, {
  		article: article
  	});
  }

}
