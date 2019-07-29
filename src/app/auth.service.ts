import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient: HttpClient,private http: Http) { }

  login(formValue){
    let headers = new Headers();
    // headers.append("Accept", 'application/json');
    //headers.append('Content-Type', 'application/json' );
    headers.append('Client-Service', 'frontend-client' );
    headers.append('Auth-Key', 'gustorestapi' );
    const requestOptions = new RequestOptions({ headers: headers });
    
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

    this.http.post("http://aboweb.local:8080/gustoCoffeeRESTAPI/index.php/auth/login?" + urlSearchParams, requestOptions)
    .map(res => res.json())  
    .subscribe(data => {
        console.log(data);
       }, error => {
        console.log(error);
      });
  
      }
      register(){

      }
}
