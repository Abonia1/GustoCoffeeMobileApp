import { Component } from '@angular/core';
import {ProductService} from '../product.service';
import { DomSanitizer } from '@angular/platform-browser';

import {Http,HttpModule, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [HttpModule]
})


export class Tab3Page {
  public product: any;
  url:string;
  data:string;
 
  constructor(public _DomSanitizationService: DomSanitizer ,public productService: ProductService){
    this.loadProduct();

  }
  // constructor(private http:Http){

  // }
  // ionViewDidLoad(){
  //   this.loadProduct();
  // }
  // loadProduct(){
  //   this.http.get('http://aboweb.local:8080/gustoCoffeeRESTAPI/index.php/service')
  //   .map( res => res.json())
  //   .subscribe(data => {
  //     this.data=data.response;
  //     console.log(data);
  //   },err=>{
  //     console.log(err);
    
  //   });
  // }

  loadProduct(){
    this.productService.load()
    .then(data => {
      this.product = data;
    });
  }

}
