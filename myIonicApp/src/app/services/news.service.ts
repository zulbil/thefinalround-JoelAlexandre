import {Injectable} from '@angular/core'; 
import {Http} from '@angular/http'; 
import 'rxjs/Rx'; 

@Injectable()

	export class NewsService{
		http:any; 
		baseUrl: String; 

		constructor(http:Http){
			this.http = http; 
			this.baseUrl = 'https://joelalexandre-api.herokuapp.com'; 
		}

		getNews(){
			return this.http.get(this.baseUrl+'/api/news').map(res => res.json()); 
		}
	
}