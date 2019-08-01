import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../../reservation.service';
import {ProductService} from '../../product.service';

import {Http,HttpModule, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//import { ReservationService } from 'src/app/reservation.service';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.page.html',
  styleUrls: ['./commandes.page.scss'],
  providers: [HttpModule]
})
export class CommandesPage implements OnInit {
  public reservation: any;
  constructor(public reservationService: ReservationService) { 
    this.loadReservation();
  }

  ngOnInit() {
  }
  loadReservation(){
    this.reservationService.load()
    .then(data => {
      this.reservation = data;
    });
  }


}
