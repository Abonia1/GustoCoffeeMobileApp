import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token';
const ID_KEY = 'auth-id';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  public data:string;
  private AuthorizationToken:any;
  private AuthorizationID:any
  constructor(private http: Http,private storage:Storage) { }
  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.storage.get(TOKEN_KEY).then((val) => {
        this.AuthorizationToken=val;
        console.log('token is ', val);
        this.storage.get(ID_KEY).then((val)=>{
        this.AuthorizationID=val;
        console.log('id is ', this.AuthorizationID);
        let headers = new Headers();
        headers.append('User-ID', this.AuthorizationID );
        headers.append('Authorization', this.AuthorizationToken );
      
     
    //const requestOptions = new RequestOptions({ headers: headers });
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('http://aboweb.local:8080/gustoCoffeeRESTAPI/index.php/reservation',({headers:headers}))
        .map( res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data.response;
          resolve(this.data);
        });
      });
      });
    });
  }
}
