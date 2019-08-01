import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public product: any;

  authenticationState = new BehaviorSubject(false);
  public data:string;
  public logindetail: any;

  constructor(public httpClient: HttpClient,private http: Http,private storage: Storage, private platform: Platform) {
    this.platform.ready().then(() => {
      this.checkToken();
    });
   }

  login(formValue){
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
  
    let headers = new Headers();
    // headers.append("Accept", 'application/json');
    //headers.append('Content-Type', 'application/json' );
    headers.append('Client-Service', 'frontend-client' );
    headers.append('Auth-Key', 'gustorestapi' );
    //onst requestOptions = new RequestOptions({ headers: headers });
    
    // let body = new FormData();
    // body.append('email', formValue.email);
    // body.append('mot_de_passe',formValue.password);
    // let postData = {

    //         "email": formValue.email,
    //         "mot_de_passe": formValue.password
    // }

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('email', formValue.email);
    urlSearchParams.append('mot_de_passe', formValue.password);

    return new Promise(resolve => {
    this.http.post("http://aboweb.local:8080/gustoCoffeeRESTAPI/index.php/auth/login?" + urlSearchParams,({headers:headers}))
    .map(res => res.json())  
    .subscribe(data => {
      this.data = data.response;
      resolve(this.data);
      this.logindetail = data;
      
      // var a = data.filter((key) => key.id == 1);
      // console.log(a);
      Object.keys(data).forEach(key=> { 
      //console.log(data['token']) ; 
      const token=data['token'];
      console.log(token);
      return this.storage.set(TOKEN_KEY, token).then(() => {
      this.authenticationState.next(true); 
    });  
    });

    //   Object.keys(data).forEach(function(key,index,value) {
    //     // key: the name of the object key
    //     // index: the ordinal position of the key within the object 
        
    //     const token = data[index].token;
    //     console.log(token);
    //     // return this.storage.set(TOKEN_KEY, token).then(() => {
    //     //   this.authenticationState.next(true);
    //     // });
      
        
    // });

        //console.log(data);
       }, error => {
        console.log(error);
      });
    });
      }
    
      register(){ }
      
      checkToken() {
        return new Promise( (resolve, reject) => {
          this.storage.get(TOKEN_KEY)
          .then(res => {
            if (res) {
              this.authenticationState.next(true);
            }
            resolve(res);
          })
          .catch( error => {
            reject(error);
          });
        });
      }
      logintest(username, password) {
        const accessToken = btoa(username + ':' + password);
        const token = 'Bearer ' + accessToken;
        return this.storage.set(TOKEN_KEY, token).then(() => {
          this.authenticationState.next(true);
        });
      }
      logout() {
        return this.storage.remove(TOKEN_KEY).then(() => {
          this.authenticationState.next(false);
        });
      }
      isAuthenticated() {
        return new Promise( (resolve, reject) => {
          this.checkToken()
          .then( res => {
            resolve(this.authenticationState.value);
          })
          .catch( error => {
            reject(error);
          });
        });
      }
}
