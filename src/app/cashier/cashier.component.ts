import {Component, OnInit, ViewChild} from '@angular/core';
import {CashierService} from './services/cashier.service';
import { NormalEvent } from '../model/NormalEvent';
import {SeatReservationComponent} from '../show-detail/seat-reservation/seat-reservation.component';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {CashierPlantComponent} from './plant/cashier-plant/cashier-plant.component';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

  @ViewChild('invalidResponseToastAlert') invalidResponseAlert;
  @ViewChild('correctResponseToastAlert') correctResponseAlert;
  @ViewChild('correctDeleteToastAlert') correctDeleteToastAlert;
  @ViewChild('bookingCompletedToastAlert') bookingCompletedToastAlert;
  @ViewChild('bookingFailedToastAlert') bookingFailedToastAlert;
  @ViewChild('seatReservationComponent') seatReservation: CashierPlantComponent;
  public position = { X: 'Left'};
  public events: any[];
  public purchases: object[];
  public loaded = false;
  public loading = false;
  public commands = [{ type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' }  }];

  public headerText: object = [{ text: 'Lista Eventi'}, { text: 'Storico Acquisti'}];
  public editSettings = { allowEditing: true, allowDeleting: true, mode: 'Dialog', allowEditOnDblClick: false,
    showDeleteConfirmDialog: true };
  public wantsToBuy = false;
  constructor(private service: CashierService, private authService: AuthenticationService, private router: Router) { }

  public loadEvents(): void {
    this.service.getEvents().subscribe(response => {
      this.events = response;
      this.loaded = true;
    }, error => {
      this.invalidResponseAlert.show();
    });
  }

  public loadPurchases(): void {
    this.loaded = false;
    this.service.getPurchases().subscribe(response => {
      this.purchases = response;
      this.loaded = true;
      console.log(this.purchases);
    }, error => {
      this.invalidResponseAlert.show();
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('loggatoAdmin') === 'false') {
      this.router.navigate(['login']);
      return;
    }
    this.loadEvents();
    this.loadPurchases();
  }

  public renderPlant(event: NormalEvent): void{
    this.seatReservation.loadData(event);
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

  public confirm(): void {
    this.loading = true;
    this.service.bookEventsSeats(this.seatReservation.getReservedSeatByEvent()).subscribe( response => {
        this.service.paymentCompletedNotification([{
                      booking: response[0],
                      price: this.seatReservation.getAmount()
          }]).subscribe(() => {},
          error => { this.invalidResponseAlert.show(); }, () => { this.bookingCompletedToastAlert.show(); this.loading = false;
                                                                  this.loadPurchases(); });
        }, error => { this.bookingCompletedToastAlert.show(); }
      );
  }

  public getTicket(id: number): void {
    window.open('http://localhost:8080/booking/ticket?id=' + id, '_blank');
  }
}
