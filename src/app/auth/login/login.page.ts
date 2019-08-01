import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public auth: any;
  email:any;
  password:any;
  public result:any;
  res : any;

  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit() {
  }
//   login(formValue:any){
// console.log(formValue.email);
//   }

  login(formValue:any){
    this.result = this.authService.login(formValue)
    .then(data=>{
      this.auth=data;
      this.router.navigateByUrl('/home');
    });
  }
    // logout(){
    //   this.result = this.authService.logout()
    //   .then(data=>{
    //     this.auth=data;
    //     this.router.navigateByUrl('/');
    //   });
    // }
    //console.log(this.result);
    // .then(data=>{

    // });

    // this.authService.login(formValue)
//     .then(data => {
//         console.log('response data');
//         console.log(data);
//     }, (err) => {
    
//     console.log(err)

// });




}
