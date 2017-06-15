import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AirbnbService {
  private airbnbItemsUrl = 'https://api.airbnb.com/v2/search_results?client_id=3092nxybyb0otqw18e8nh5nty&location=';  // URL to web API
  private airbnbReviewsUrl = 'https://api.airbnb.com/v2/reviews?client_id=3092nxybyb0otqw18e8nh5nty&role=all&listing_id=';

  constructor (private http: Http) {}

  retrieveCities() {
    return [
      'Tel Aviv',
      'London',
      'Paris',
      'New York'
    ]
  }

  getRbnbReviews(item) {
    return this.http.get(this.airbnbReviewsUrl+item.listing.id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getRbnbItems(city): Observable<any[]> {
    return this.http.get(this.airbnbItemsUrl+city)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body); // to inspect it in the console
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
