import {Component, OnInit, ViewChild} from '@angular/core';
import {CashierService} from './services/cashier.service';
import { NormalEvent } from '../model/NormalEvent';
import {SeatReservationComponent} from '../show-detail/seat-reservation/seat-reservation.component';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

  @ViewChild('invalidResponseToastAlert') invalidResponseAlert;
  @ViewChild('correctResponseToastAlert') correctResponseAlert;
  @ViewChild('correctDeleteToastAlert') correctDeleteToastAlert;
  @ViewChild('seatReservationComponent') seatReservation: SeatReservationComponent;
  public position = { X: 'Left'};
  public events: NormalEvent[];
  public purchases: object[];
  public loaded = false;
  public commands = [{ type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }  }];

  public headerText: object = [{ text: 'Lista Eventi'}, { text: 'Storico Acquisti'}];
  public editSettings: { allowDeleting: true, mode: 'Dialog', showDeleteConfirmDialog: true};
  constructor(private service: CashierService, private authService: AuthenticationService, private router: Router) { }

  public loadEvents(): void {
    this.service.getEvents().subscribe(response => {
      this.events = response.data;
      this.loaded = true;
    }, error => {
      this.invalidResponseAlert.show();
    });
  }

  public loadPurchases(): void {
    this.service.getPurchases().subscribe(response => {
      this.purchases = response.data;
      this.loaded = true;
    }, error => {
      this.invalidResponseAlert.show();
    });
  }

  ngOnInit(): void {
    // this.loadEvents();
    // this.loadPurchases();
  }

  public renderPlant(event: NormalEvent): void{
    this.seatReservation.loadData(event.date, event.startTime, event.room);
  }

  public actionBegin(arg0: any): void {
    if (arg0.requestType === 'delete') {
      this.loaded = false;
      this.service.deletePurchase(arg0.data[0].id).subscribe(() => { }, error => {
        this.loadPurchases();
        this.invalidResponseAlert.show();
      }, () => {
        this.loadPurchases();
        this.correctDeleteToastAlert.show();
      });
    }
  }

  public doLogout(): void {
    this.authService.logoutUser().subscribe(response => {
      localStorage.setItem('loggatoCashier', 'false');
      this.router.navigate(['login']);
    });
  }

}
