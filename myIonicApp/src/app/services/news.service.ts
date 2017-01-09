import {Injectable} from '@angular/core'; 
import {Http} from '@angular/http'; 
import 'rxjs/Rx'; 

@Injectable()

	export class NewsService{
		http:any; 
		baseUrl: String; 

		constructor(http:Http){
			this.http = http; 
			this.baseUrl = 'http://localhost:1337'; 
		}

		getNews(){
			return this.http.get(this.baseUrl+'/news').map(res => res.json()); 
		}
	
}